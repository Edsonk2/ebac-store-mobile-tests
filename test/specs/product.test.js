import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Product Details', () => {

    it('should view product info', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')

        const products = await browsePage.products

        expect(products.length).toBeGreaterThan(0)

        await products[0].click()

        const productTitle = await productPage.getProductTitle('Ingrid Running Jacket')

        await expect(productTitle).toBeDisplayed()
    })
})
