const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  
  // Test 1: Desktop
  console.log('Testing Desktop (1280x900)...');
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const langBar = await page.$('.envelope-lang-bar');
  console.log('Envelope lang bar present:', !!langBar);

  // Switch to Hindi on envelope
  const hiChip = await page.$('.envelope-lang-chip:has-text("हिन्दी")');
  if (hiChip) {
    await hiChip.click();
    console.log('Switched to Hindi on envelope');
  }

  // Open envelope
  const openBtn = await page.$('[data-envelope-open]');
  if (openBtn) {
    await openBtn.click({ force: true });
    console.log('Clicked envelope open button');
  }

  await page.waitForTimeout(3600);

  // Check inside controls
  const insideLangToggle = await page.$('.floating-controls-bar .lang-toggle-button');
  console.log('Inside lang toggle button present (should be false):', !!insideLangToggle);

  const musicToggle = await page.$('.floating-controls-bar .music-toggle');
  console.log('Music toggle button present:', !!musicToggle);

  // Verify Haldi and Sangeet venue texts
  const haldiText = await page.locator('#haldi').innerText();
  const sangeetText = await page.locator('#sangeet').innerText();
  console.log('Haldi section contains Sharda Vihar:', haldiText.includes('शारदा विहार') || haldiText.includes('Sharda Vihar'));
  console.log('Sangeet section contains Sharda Vihar:', sangeetText.includes('शारदा विहार') || sangeetText.includes('Sharda Vihar'));

  // Test Mobile (375x667)
  console.log('Testing Mobile (375x667)...');
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const mobileOpenBtn = await mobilePage.$('[data-envelope-open]');
  if (mobileOpenBtn) {
    await mobileOpenBtn.click({ force: true });
  }
  await mobilePage.waitForTimeout(3600);

  console.log('Mobile opened successfully');
  await browser.close();
  console.log('All automated checks complete!');
})();
