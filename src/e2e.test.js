import puppeteer from 'puppeteer'

//devServer address
const appUrlBase = 'http://localhost:3000'

let browser;
let page;

beforeAll(async()=>{
    browser = await puppeteer.launch({})
    page = await  browser.newPage()
})

describe('Bookish', () => {
    test('Heading',async()=>{
        await page.goto(`${appUrlBase}`)
        await page.waitForSelector('h1')
        const result = await page.evaluate(()=>{
            return document.querySelector('h1').innerText
        })

        expect(result).toEqual('Library')
    })

    test('Book List', async()=>{
        await page.goto(`${appUrlBase}`)
        await page.waitForSelector('.books')
        const books = await page.evaluate(()=>{
            return [...document.querySelectorAll('.book h2.title ')].map(el=>el.innerText)
        })
        expect(books.length).toEqual(2)
    })
})


afterAll(()=>{
    browser.close()
})