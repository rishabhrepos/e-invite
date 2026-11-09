import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });

  const getMetrics = async (url, isLocal = false) => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
    const btn = page.locator('button[data-envelope-open]');
    if (await btn.count() > 0) {
      await btn.click({ force: true });
      await page.waitForTimeout(4000);
    }

    const selectors = [
      '#couple-names',
      '.hero-names-bride',
      '.hero-names-groom',
      '.hero-names-amp',
      '.hero-preamble',
      '.hero-hashtag',
      '.hero-icon-row',
      '.wedding-countdown',
      '.countdown-values',
      '.floral-hero-portrait',
      '.hero-characters-img',
      '.inv-wrap',
      '.inv-card',
      '.inv-names',
      '.inv-families',
      '.floral-celebrations',
      '.floral-event-nav',
      '#haldi',
      '#haldi .ec-layout',
      '#haldi .ec-characters',
      '#our-story',
      '.story-milestones',
      '.note-shell',
    ];

    const results = {};
    for (const sel of selectors) {
      const loc = page.locator(sel).first();
      if (await loc.count() > 0) {
        const box = await loc.boundingBox();
        const styles = await loc.evaluate((el) => {
          const cs = window.getComputedStyle(el);
          return {
            display: cs.display,
            fontSize: cs.fontSize,
            lineHeight: cs.lineHeight,
            fontFamily: cs.fontFamily,
            color: cs.color,
            margin: cs.margin,
            padding: cs.padding,
            width: cs.width,
            height: cs.height,
            textAlign: cs.textAlign,
            position: cs.position,
            overflow: cs.overflow,
          };
        });
        results[sel] = { box, styles };
      } else {
        results[sel] = null;
      }
    }
    await page.close();
    return results;
  };

  const refMetrics = await getMetrics('https://wedding.huesnwhispers.shop/meera-arjun-231226');
  const localMetrics = await getMetrics('http://localhost:3000', true);

  console.log('=== COMPARISON REPORT ===');
  for (const key of Object.keys(refMetrics)) {
    console.log(`\n--- ${key} ---`);
    if (!refMetrics[key]) {
      console.log('  Ref: NOT FOUND');
    } else {
      console.log('  Ref Box:', JSON.stringify(refMetrics[key].box));
      console.log('  Ref Styles: font=', refMetrics[key].styles.fontSize, 'color=', refMetrics[key].styles.color, 'display=', refMetrics[key].styles.display, 'pad=', refMetrics[key].styles.padding, 'mar=', refMetrics[key].styles.margin);
    }
    if (!localMetrics[key]) {
      console.log('  Local: NOT FOUND');
    } else {
      console.log('  Local Box:', JSON.stringify(localMetrics[key].box));
      console.log('  Local Styles: font=', localMetrics[key].styles.fontSize, 'color=', localMetrics[key].styles.color, 'display=', localMetrics[key].styles.display, 'pad=', localMetrics[key].styles.padding, 'mar=', localMetrics[key].styles.margin);
    }
  }

  await browser.close();
})();
