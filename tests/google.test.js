const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testGoogle() {
    let driver;

    try {
        const options = new chrome.Options();

        options.addArguments('--headless=new');
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--disable-gpu');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.get('https://www.google.com');

        const titulo = await driver.getTitle();

        expect(titulo).toContain('Google');

    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

test('Google', async () => {
    await testGoogle();
}, 30000);