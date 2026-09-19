import { $, driver } from "@wdio/globals";

class HomePage {
  async openMenu(menu) {
    if (driver.isIOS) {
      const element = await $(`~tab-${menu}`);
      await element.click();
    } else {
      await $(`id:tab-${menu}`).click();
    }
  }

  async search() {
    const element = await $(
      `-ios predicate string:name ENDSWITH "Search Products"`,
    );
    await element.click();
  }
}

export default new HomePage();
