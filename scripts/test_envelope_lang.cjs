const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  
  // 1. Desktop Envelope Test
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Check envelope language bar exists
  const langBar = await page.$('.envelope-lang-bar');
  console.log('Envelope language bar found:', !!langBar);
  
  const initialChip = await page.$eval('.envelope-lang-chip.is-selected', el => el.textContent.trim());
  console.log('Initial language chip selected:', initialChip);
  
  // Screenshot initial envelope
  await page.screenshot({ path: '/snapshots/envelope_desktop.png' });
  console.log('Saved envelope_desktop.png');
  
  // Switch to Hindi on envelope
  const hindiBtn = await page.$('button.envelope-lang-chip:has-text("हिन्दी")');
  if (hindiBtn) {
    console.log('Clicking Hindi chip on envelope...');
    await hindiBtn.click();
    await page.waitForTimeout(300);
  }
  
  const sealTextHi = await page.$eval('.envelope-open-label text', el => el.textContent.trim());
  console.log('Seal text after switching to Hindi:', sealTextHi);
  
  // Screenshot Hindi envelope
  await page.screenshot({ path: '/snapshots/envelope_hindi_desktop.png' });
  console.log('Saved envelope_hindi_desktop.png');
  
  // Open envelope
  const openBtn = await page.$('[data-envelope-open]');
  if (openBtn) {
    console.log('Opening envelope...');
    await openBtn.click({ force: true });
    await page.waitForTimeout(3500);
  }
  
  // Full page screenshot in Hindi to inspect layout & SVG clearance
  await page.screenshot({ path: '/snapshots/full_page_hindi.png', fullPage: true });
  console.log('Saved full_page_hindi.png');
  
  // 2. Mobile Envelope Test
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: '/snapshots/envelope_mobile.png' });
  console.log('Saved envelope_mobile.png');
  
  await browser.close();
  console.log('All tests completed successfully!');
})();
