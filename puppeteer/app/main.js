const pptr = require('puppeteer');

async function run() {
    const browser = await pptr.launch({});

    // create page
    const page = await browser.newPage();

    // fix screen size
    await page.setViewport({ width: 720, height: 600 })

    // select url
    await page.goto('https://www.google.co.jp/');

    console.log('https://www.google.co.jp/ is…');
    console.log('-----get title dynamic!-----');
    console.log(await page.title());
    console.log('----------');

    // close browser
    await browser.close()
}

run();
