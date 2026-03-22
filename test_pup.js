import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching puppeteer...");
  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    page.on('console', msg => {
        if (msg.type() === 'error' || msg.text().includes('Error')) {
            console.log('BROWSER_ERROR:', msg.text());
        }
    });
    page.on('pageerror', err => {
        console.log('PAGE_EXCEPTION:', err.message);
    });

    console.log("Navigating to localhost:5173...");
    await page.goto('http://localhost:5173', {waitUntil: 'networkidle2', timeout: 10000});
    
    await new Promise(r => setTimeout(r, 2000));
    
    await browser.close();
    console.log("Done.");
  } catch (err) {
    console.log("SCRIPT ERROR:", err);
  }
})();
