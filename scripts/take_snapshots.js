import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  fs.mkdirSync('snapshots', { recursive: true });

  // 1. Snapshot Reference
  try {
    const pageRef = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await pageRef.goto('https://wedding.huesnwhispers.shop/meera-arjun-231226', { waitUntil: 'networkidle', timeout: 25000 });
    await pageRef.screenshot({ path: 'snapshots/ref_envelope.png' });
    
    // Tap to open envelope
    const btn = pageRef.locator('[data-envelope-open]');
    if (await btn.count() > 0) {
      await btn.click();
      await pageRef.waitForTimeout(4000);
      await pageRef.screenshot({ path: 'snapshots/ref_hero.png' });
      await pageRef.screenshot({ path: 'snapshots/ref_open.png', fullPage: true });
    }
    console.log('Reference snapshots captured!');
  } catch (e) {
    console.error('Ref error:', e.message);
  }

  // 2. Snapshot Local
  try {
    const pageLocal = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await pageLocal.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 25000 });
    await pageLocal.screenshot({ path: 'snapshots/local_envelope.png' });
    
    // Tap to open envelope
    const btn = pageLocal.locator('button.envelope-open-button');
    if (await btn.count() > 0) {
      await btn.click();
      await pageLocal.waitForTimeout(4000);
      await pageLocal.screenshot({ path: 'snapshots/local_hero.png' });
      await pageLocal.screenshot({ path: 'snapshots/local_open.png', fullPage: true });
    }
    console.log('Local snapshots captured!');
  } catch (e) {
    console.error('Local error:', e.message);
  }

  await browser.close();
  console.log('Done!');
})();
