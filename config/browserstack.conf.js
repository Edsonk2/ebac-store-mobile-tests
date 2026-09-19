import { generalConf } from "./general.conf.js";

export const browserstackConf = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: "hub-cloud.browserstack.com",
  port: 443,
  baseUrl: "wd/hub",

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 15",
      "appium:platformVersion": "17",
      "appium:automationName": "XCUITest",
      "appium:app": "bs://0ce3af51af462026540b133aac3091f195f2bb39",

      "bstack:options": {
        projectName: "EBAC Store Mobile Tests",
        buildName: "EBAC Store - CI",
        sessionName: "EBAC Store iOS",
        deviceOrientation: "portrait",
      },
    },
  ],

  ...generalConf,
};
