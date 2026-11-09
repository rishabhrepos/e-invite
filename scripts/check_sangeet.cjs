const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Remove envelope dialog
  await page.evaluate(() => {
    const d = document.querySelector('dialog');
    if (d) d.remove();
  });
  
  // English check
  const sangeetValuesEn = await page.$$eval('#sangeet .ec-detail-value', els => els.map(el => el.textContent.trim()));
  console.log('Sangeet Details (EN):', sangeetValuesEn);
  
  // Hindi check
  const langToggle = await page.$('.lang-toggle-button');
  if (langToggle) await langToggle.click();
  await page.waitForTimeout(300);
  
  const sangeetValuesHi = await page.$$eval('#sangeet .ec-detail-value', els => els.map(el => el.textContent.trim()));
  console.log('Sangeet Details (HI):', sangeetValuesHi);
  
  await browser.close();
  console.log('Verification complete!');
})();
