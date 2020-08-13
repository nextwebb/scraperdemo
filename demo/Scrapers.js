const puppeteer = require('puppeteer');

class ScrapeProduct{
    async scrapeAmazonStore(url){
        try {
            const browser = await puppeteer.launch({
                headless:true,
                args: [
                  '--no-sandbox'
                ],
              });
            const page =  await browser.newPage();
                    await page.goto(url);

                    //get product imgUrl
            const [el] = await page.$x('//*[@id="landingImage"]');
            const src = await el.getProperty('src');
            const imgUrl = await src.jsonValue();

                    // get product title
            const [el2] = await page.$x('//*[@id="productTitle"]');
            const txt = await el2.getProperty('textContent');
            let title = await txt.jsonValue();



                    // get product price
            const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
            const txt2 = await el3.getProperty('textContent');
            const price = await txt2.jsonValue();

            return{
                imgUrl,
                title,
                price
            }
            browser.close()
        } catch (error) {
            console.log(error)
             return error
        }
    }

}
module.exports = ScrapeProduct
