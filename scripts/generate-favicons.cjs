const fs = require('fs');
const svg = fs.readFileSync('public/favicon.svg', 'utf8');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Create an HTML page with the SVG taking up the whole body, no margin
  const html = `
    <!DOCTYPE html>
    <html>
      <style>
        body { margin: 0; padding: 0; background: transparent; }
        svg { width: 192px; height: 192px; }
      </style>
      <body>${svg}</body>
    </html>
  `;
  
  await page.setContent(html);
  
  const element = await page.$('svg');
  // 192x192
  await element.screenshot({ path: 'public/favicon-192.png', omitBackground: true });
  // 512x512
  await page.evaluate(() => {
    const svg = document.querySelector('svg');
    svg.style.width = '512px';
    svg.style.height = '512px';
  });
  await element.screenshot({ path: 'public/favicon-512.png', omitBackground: true });
  // apple-touch-icon 180x180
  // Note: apple touch icon often has a solid background. Let's make it solid black.
  await page.evaluate(() => {
    document.body.style.background = '#0A0A0F';
    const svg = document.querySelector('svg');
    svg.style.width = '180px';
    svg.style.height = '180px';
  });
  await element.screenshot({ path: 'public/apple-touch-icon.png' });
  
  // Also 32x32 for normal icon
  await page.evaluate(() => {
    document.body.style.background = 'transparent';
    const svg = document.querySelector('svg');
    svg.style.width = '32px';
    svg.style.height = '32px';
  });
  await element.screenshot({ path: 'public/favicon-32x32.png', omitBackground: true });
  
  await browser.close();
})();
