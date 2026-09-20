import { expect, driver } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import profilePage from "../pageobjects/profile.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    const profileTab = "profile";

    // Abre o perfil
    await homePage.openMenu(profileTab);

    // Realiza o login
    await loginPage.login("cliente@ebac.art.br", process.env.EBAC_PASSWORD);

    // Abre novamente o perfil após o login
    await homePage.openMenu(profileTab);

    // Diagnóstico: captura a árvore de elementos do iOS
    console.log("=== IOS PAGE SOURCE ===");
    console.log(await driver.getPageSource());

    // Validação do nome do usuário
    const profileName = await profilePage.profileName("EBAC Cliente");

    await expect(profileName).toBeDisplayed();
  });
});
