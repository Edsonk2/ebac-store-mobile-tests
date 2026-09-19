import { expect } from '@wdio/globals'

import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Checkout', () => {

    it('should complete checkout', async () => {

        // Busca o produto
        await homePage.search()
        await browsePage.searchInput.setValue('In')

        const products = await browsePage.products

        expect(products.length).toBeGreaterThan(0)

        // Seleciona o primeiro produto
        await products[0].click()

        const productTitle = await productPage.getProductTitle('Ingrid Running Jacket')

        await expect(productTitle).toBeDisplayed()

        // Adiciona o produto ao carrinho
        const addToCart = await $('~addToCart')
        await addToCart.click()

        // Abre o carrinho
        const cart = await $('~cart')
        await cart.click()

        // Adiciona um endereço
        const addNewAddress = await $('~addNewAddress')

        if (await addNewAddress.isDisplayed()) {
            await addNewAddress.click()

            await $('~name').setValue('Edson Oliveira')
            await $('~phone').setValue('98999999999')
            await $('~address').setValue('Rua Teste')
            await $('~city').setValue('Sao Luis')
            await $('~state').setValue('MA')
            await $('~zipCode').setValue('65000000')

            await $('~save').click()
        }

        // Continua para pagamento
        await $('~selectAddressOrContinueToPayment').click()

        // Seleciona Cash on Delivery
        await $('~option-1').click()

        // Finaliza o pedido
        await $('~completeCheckout').click()

        // Valida conclusão do pedido
        const successImage = await $('~transactionSuccessfulImage')

        await expect(successImage).toBeDisplayed()
    })

})
