import { $, driver } from "@wdio/globals";

class LoginPage {
  get email() {
    return $("id:email");
  }

  get password() {
    if (driver.isAndroid) {
      return $('android=new UiSelector().text("Password")');
    }

    if (driver.isIOS) {
      return $(
        '-ios predicate string:type == "XCUIElementTypeSecureTextField"',
      );
    }
  }

  get btnLogin() {
    if (driver.isAndroid) {
      return $("~Login");
    }

    if (driver.isIOS) {
      return $("~btnLogin");
    }
  }

  async login(email, password) {
    await this.email.waitForDisplayed({ timeout: 20000 });
    await this.email.setValue(email);

    await this.password.waitForDisplayed({ timeout: 20000 });
    await this.password.setValue(password);

    await this.btnLogin.waitForDisplayed({ timeout: 20000 });
    await this.btnLogin.click();
  }
}

export default new LoginPage();
