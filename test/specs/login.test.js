import { expect, $ } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    const profileTab = "profile";

    // Abre o perfil
    await homePage.openMenu(profileTab);

    // Realiza o login
    await loginPage.login(
      "cliente@ebac.art.br",
      process.env.EBAC_PASSWORD
    );

    // Abre novamente o perfil após o login
    await homePage.openMenu(profileTab);

    // Valida que existe conteúdo visível após o login
    const profileScreen = await $(
      '-ios predicate string:type == "XCUIElementTypeStaticText"'
    );

    await expect(profileScreen).toBeDisplayed();
  });
});