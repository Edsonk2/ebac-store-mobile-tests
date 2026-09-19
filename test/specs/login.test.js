import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        let profileTab = 'profile'

        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'SUA_SENHA_AQUI')
        await homePage.openMenu(profileTab)

        expect(
            (await profilePage.profileName('EBAC Cliente')).isDisplayed()
        ).toBeTruthy()
    })
})