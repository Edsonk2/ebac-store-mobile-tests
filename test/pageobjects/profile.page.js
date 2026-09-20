import { $, driver } from "@wdio/globals";

class ProfilePage {
  async profileName(name) {
    if (driver.isIOS) {
      return await $(`-ios predicate string:name == "${name}"`);
    }
    return await $(`//android.widget.TextView[@text="${name}"]`);
  }
}
export default new ProfilePage();
