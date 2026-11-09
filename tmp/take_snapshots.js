const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  fs.mkdirSync('/tmp/snapshots', { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox'] });

  // 1. Reference site snapshot
  console.log('Navigating to reference site...');
  const pageRef = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await pageRef.goto('https://wedding.huesnwhispers.shop/meera-arjun-231226', { waitUntil: 'networkidle', timeout: 20000 });
    // Snapshot envelope
    await pageRef.screenshot({ path: '/tmp/snapshots/ref_envelope.png' });
    
    // Click seal or envelope to open
    const seal = await pageRef.$('.envelope-seal, .envelope-click-area, .envelope, dialog');
    if (seal) {
      console.log('Clicking seal on ref...');
      await seal.click().catch(() => {});
      await pageRef.waitForTimeout(3000);
    }
    await pageRef.screenshot({ path: '/tmp/snapshots/ref_desktop.png', fullPage: true });
    
    // Also mobile snapshot
    await pageRef.setViewportSize({ width: 390, height: 844 });
    await pageRef.waitForTimeout(500);
    await pageRef.screenshot({ path: '/tmp/snapshots/ref_mobile.png', fullPage: true });
    console.log('Saved ref snapshots');
  } catch (e) {
    console.error('Error with ref site:', e);
  }

  // 2. Local site snapshot
  console.log('Navigating to local site...');
  const pageLocal = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    await pageLocal.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
    await pageLocal.screenshot({ path: '/tmp/snapshots/local_envelope.png' });
    
    const localSeal = await pageLocal.$('.envelope-seal, .envelope-click-area, .envelope, dialog, [data-envelope]');
    if (localSeal) {
      console.log('Clicking seal on local...');
      await localSeal.click().catch(() => {});
      await pageLocal.waitForTimeout(3000);
    }
    await pageLocal.screenshot({ path: '/tmp/snapshots/local_desktop.png', fullPage: true });
    
    await pageLocal.setViewportSize({ width: 390, height: 844 });
    await pageLocal.waitForTimeout(500);
    await pageLocal.screenshot({ path: '/tmp/snapshots/local_mobile.png', fullPage: true });
    console.log('Saved local snapshots');
  } catch (e) {
    console.error('Error with local site:', e);
  }

  await browser.close();
  console.log('Done taking snapshots.');
})().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
