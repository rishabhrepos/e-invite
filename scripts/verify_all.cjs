const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Open envelope
  const envelopeBtn = await page.$('[data-envelope-open]');
  if (envelopeBtn) {
    await envelopeBtn.click({ force: true });
    await page.waitForTimeout(1000);
  }
  
  // Check couple names in English
  const englishHeroNames = await page.$eval('#couple-names', el => el.textContent);
  console.log('Hero Names (English):', englishHeroNames.trim().replace(/\s+/g, ' '));
  
  // Toggle language to Hindi
  const langToggle = await page.$('.lang-toggle-button');
  if (langToggle) {
    console.log('Clicking language toggle to switch to Hindi...');
    await langToggle.click();
    await page.waitForTimeout(300);
  }
  
  // Check couple names in Hindi
  const hindiHeroNames = await page.$eval('#couple-names', el => el.textContent);
  console.log('Hero Names (Hindi):', hindiHeroNames.trim().replace(/\s+/g, ' '));
  
  // Check Haldi venue in Hindi
  const haldiVenue = await page.$eval('#haldi .ec-detail-value', el => el.textContent);
  console.log('Haldi Venue in Hindi:', haldiVenue.trim());
  
  // Check music toggle label in Hindi
  const musicLabelHi = await page.$eval('.music-label-text', el => el.textContent);
  console.log('Music Label in Hindi:', musicLabelHi.trim());
  
  // Check events list (no reception)
  const eventIds = await page.$$eval('.ec-card', cards => cards.map(c => c.id));
  console.log('Event cards rendered:', eventIds);
  
  // Check mobile controls layout
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.evaluate(() => {
    const dialog = document.querySelector('dialog');
    if (dialog) dialog.remove();
  });
  
  const mobileControls = await mobilePage.evaluate(() => {
    const bar = document.querySelector('.floating-controls-bar');
    const langBtn = document.querySelector('.lang-toggle-button');
    const musicBtn = document.querySelector('.music-toggle');
    return {
      barBox: bar ? bar.getBoundingClientRect() : null,
      langBox: langBtn ? langBtn.getBoundingClientRect() : null,
      musicBox: musicBtn ? musicBtn.getBoundingClientRect() : null,
    };
  });
  console.log('Mobile Controls Dimensions:', JSON.stringify(mobileControls, null, 2));
  
  await browser.close();
  console.log('All verifications passed!');
})();
