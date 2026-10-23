const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const url = process.env.PDF_SOURCE_URL || 'file://' + path.resolve(__dirname, '../index.html');
  const outputPath = path.resolve(__dirname, '../assets/syed-adeel-waseem-portfolio.pdf');

  console.log(`Generating PDF from: ${url}`);
  console.log(`Output: ${outputPath}`);

  const executablePath = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // Emulate print media to apply @media print styles
    await page.emulateMediaType('print');

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    console.log('PDF generated successfully');
  } catch (error) {
    console.error('PDF generation failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();