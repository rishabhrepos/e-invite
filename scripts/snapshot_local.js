import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: 'snapshots/local_envelope.png' });

  // Click seal to open
  const sealBtn = page.locator('button[data-envelope-open]');
  if (await sealBtn.count() > 0) {
    await sealBtn.click({ force: true });
    await page.waitForTimeout(3800);
    await page.screenshot({ path: 'snapshots/local_hero.png' });
    await page.screenshot({ path: 'snapshots/local_full.png', fullPage: true });
  }

  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  const mSealBtn = mobilePage.locator('button[data-envelope-open]');
  if (await mSealBtn.count() > 0) {
    await mSealBtn.click({ force: true });
    await mobilePage.waitForTimeout(3800);
    await mobilePage.screenshot({ path: 'snapshots/local_mobile_hero.png' });
    await mobilePage.screenshot({ path: 'snapshots/local_mobile_full.png', fullPage: true });
  }

  await browser.close();
  console.log('Local snapshots complete!');
})();
