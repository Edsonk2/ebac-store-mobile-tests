import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'

describe('Search', () => {

    it('should search products', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')

        const products = await browsePage.products

        expect(products.length).toBeGreaterThan(0)

        for (const product of products) {
            expect(await product.getText()).toContain('R$')
        }
    })
})
