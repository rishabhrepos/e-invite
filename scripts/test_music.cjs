const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Click envelope open
  const envelopeBtn = await page.$('[data-envelope-open]');
  if (envelopeBtn) {
    console.log('Clicking envelope button...');
    await envelopeBtn.click({ force: true });
  }
  
  await page.waitForTimeout(1000);
  
  // Check music player state
  const musicState = await page.evaluate(() => {
    const player = document.querySelector('[data-music-player]');
    const audio = document.querySelector('audio');
    return {
      playerState: player ? player.getAttribute('data-state') : null,
      audioPaused: audio ? audio.paused : null,
      audioCurrentTime: audio ? audio.currentTime : null,
      audioSrc: audio ? audio.src : null,
    };
  });
  console.log('Music state after envelope open:', JSON.stringify(musicState));
  
  // Now click music toggle
  const musicToggle = await page.$('.music-toggle');
  if (musicToggle) {
    console.log('Clicking music toggle button to pause...');
    await musicToggle.click();
    await page.waitForTimeout(500);
    const musicState2 = await page.evaluate(() => {
      const player = document.querySelector('[data-music-player]');
      const audio = document.querySelector('audio');
      return {
        playerState: player ? player.getAttribute('data-state') : null,
        audioPaused: audio ? audio.paused : null,
      };
    });
    console.log('Music state after 1st click:', JSON.stringify(musicState2));
    
    console.log('Clicking music toggle button to play again...');
    await musicToggle.click();
    await page.waitForTimeout(500);
    const musicState3 = await page.evaluate(() => {
      const player = document.querySelector('[data-music-player]');
      const audio = document.querySelector('audio');
      return {
        playerState: player ? player.getAttribute('data-state') : null,
        audioPaused: audio ? audio.paused : null,
      };
    });
    console.log('Music state after 2nd click:', JSON.stringify(musicState3));
  }
  
  await browser.close();
})();
