const puppeteer = require('puppeteer');
var fs = require("fs");

const COOKIES_PATH = 'token/cookies.json';
const urls = [
    'hogeurl'
]

async function crwal_task(browser, url) {
    const page = await browser.newPage();

    // use cookie
    const cookies = JSON.parse(fs.readFileSync(COOKIES_PATH, 'utf-8'));
    for (let cookie of cookies) {
        await page.setCookie(cookie);
    }

    await page.goto(url);
    const session = await page.target().createCDPSession();
    await session.send('Page.enable');
    const title = await page.$eval('#title', item => {
        return item.textContent.replace(/\s|\/+/g, "");
        ;
    });
    const {data} = await session.send('Page.captureSnapshot');
    fs.writeFile(`./output/${title}.mht`, data, (err, data) => {
        if (err) console.log(err);
        else console.log('write end');
    });
}

(async () => {
    const browser = await puppeteer.launch();

    for (let url of urls) {
        await crwal_task(browser, url);
        console.log(url);
    }
    await browser.close();
})();


