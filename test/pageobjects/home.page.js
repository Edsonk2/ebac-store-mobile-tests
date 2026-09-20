import { $, driver } from "@wdio/globals";

class HomePage {
    async openMenu(menu) {
        if (driver.isIOS) {
            if (menu === "profile") {
                console.log("=== TOQUE PROFILE IOS ===");

                await driver.execute("mobile: tap", {
                    x: 343,
                    y: 786
                });

                return;
            }

            const element = await $(`~tab-${menu}`);
            await element.click();
            return;
        }

        await $(`id:tab-${menu}`).click();
    }

    async search() {
        const element = await $(
            `-ios predicate string:name ENDSWITH "Search Products"`
        );
        await element.click();
    }
}

export default new HomePage();
