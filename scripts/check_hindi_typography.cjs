const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Close envelope
  await page.evaluate(() => {
    const d = document.querySelector('dialog');
    if (d) d.remove();
  });
  
  // Switch to Hindi
  const langToggle = await page.$('.lang-toggle-button');
  if (langToggle) {
    await langToggle.click();
    await page.waitForTimeout(400);
  }
  
  // Inspect Hindi elements
  const hindiReport = await page.evaluate(() => {
    const selectors = [
      '.hero-blessing p',
      '#couple-names',
      '.hero-names-bride',
      '.hero-names-groom',
      '.hero-preamble',
      '.hero-icon-row',
      '.floral-section-label',
      '.inv-preamble',
      '.inv-names',
      '.inv-families__label-center',
      '.inv-families__names',
      '.inv-detail__main',
      '.inv-detail__sub',
      '.ec-event-name',
      '.ec-description',
      '.ec-detail-label',
      '.ec-detail-value',
      '.story-eyebrow',
      '#our-story-title',
      '.note-shell__header h2',
      '#rsvp h2',
    ];
    
    return selectors.map(sel => {
      const el = document.querySelector(sel);
      if (!el) return { selector: sel, found: false };
      const cs = window.getComputedStyle(el);
      return {
        selector: sel,
        found: true,
        text: el.innerText.replace(/\n/g, ' ').slice(0, 60),
        letterSpacing: cs.letterSpacing,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
      };
    });
  });
  
  console.log('HINDI TYPOGRAPHY REPORT:');
  console.log(JSON.stringify(hindiReport, null, 2));
  
  await browser.close();
})();
