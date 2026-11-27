const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const outputPath = path.resolve(__dirname, '../assets/og-image.png');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
  body{background:#EAE9E1;color:#16241B;font-family:'DM Sans',system-ui,sans-serif;display:flex;align-items:center;padding:0 80px}
  .card{width:100%}
  .eyebrow{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.18em;text-transform:uppercase;color:#5A6356;margin-bottom:24px}
  h1{font-family:'Space Grotesk',system-ui,sans-serif;font-size:78px;font-weight:700;line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;color:#16241B}
  .role{font-family:'Space Grotesk',system-ui,sans-serif;font-size:30px;font-weight:500;color:#1C5138;margin-bottom:28px}
  .desc{font-size:22px;line-height:1.5;color:#2F3D34;max-width:720px}
  .footer{position:absolute;bottom:48px;left:80px;font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.1em;text-transform:uppercase;color:#5A6356}
  .bar{position:absolute;left:0;top:0;width:12px;height:100%;background:#1C5138}
  .award{display:inline-block;margin-top:20px;padding:8px 14px;border:1px solid #CBB78A;background:#EFE7D2;color:#7A5C24;font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.05em;border-radius:3px}
</style></head><body>
<div class="bar"></div>
<div class="card">
  <div class="eyebrow">Portfolio</div>
  <h1>Syed Adeel Waseem</h1>
  <div class="role">AI Automation Engineer | Agentic AI Developer</div>
  <div class="desc">I build AI systems that do real work — turning business workflows into practical AI applications and automations.</div>
  <div class="award">★ Winner — AI-Chatbot, AI Seerathon 2026</div>
</div>
<div class="footer">Islamabad, Pakistan</div>
</body></html>`;
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.fonts.ready.then(() => true), { timeout: 30000 });
    await page.screenshot({ path: outputPath, type: 'png' });
    console.log('OG image generated:', outputPath);
  } catch (e) {
    console.error('OG image generation failed:', e);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
