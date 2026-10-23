const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const url = process.env.PDF_SOURCE_URL || 'file://' + path.resolve(__dirname, '../index.html');
  const outputPath = path.resolve(__dirname, '../assets/syed-adeel-waseem-portfolio.pdf');

  console.log(`Generating PDF from: ${url}`);
  console.log(`Output: ${outputPath}`);

  // Resolve Chrome executable: CHROME_PATH env > Puppeteer bundled > system default
  let executablePath = process.env.CHROME_PATH || null;
  if (!executablePath) {
    try {
      executablePath = puppeteer.executablePath();
      if (executablePath) {
        console.log(`Using Puppeteer bundled browser: ${executablePath}`);
      }
    } catch (e) {
      console.warn('Puppeteer executablePath() failed:', e.message);
    }
  }
  if (!executablePath) {
    console.warn('No Chrome executable found; relying on Puppeteer default resolution');
  }

  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  const browser = await puppeteer.launch(launchOptions);

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