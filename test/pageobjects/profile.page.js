import { $, driver } from "@wdio/globals";

class ProfilePage {
  async profileName(name) {
    if (driver.isIOS) {
      const element = await $(
        `-ios predicate string:label == "${name}" OR name == "${name}" OR value == "${name}"`,
      );

      await element.waitForDisplayed({
        timeout: 20000,
        interval: 1000,
      });

      return element;
    }

    const element = await $(`//android.widget.TextView[@text="${name}"]`);

    await element.waitForDisplayed({
      timeout: 20000,
      interval: 1000,
    });

    return element;
  }
}

export default new ProfilePage();
