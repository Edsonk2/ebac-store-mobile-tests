import { generalConf } from "./general.conf.js";

export let sauceConf = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  capabilities:
    process.env.PLATFORM === "android"
      ? [
          {
            platformName: "Android",
            "appium:app": "storage:filename=ebacshop (1).aab",
            "appium:deviceName": "Samsung.*",
            "appium:platformVersion": "10",
            "appium:automationName": "UiAutomator2",
            "appium:disableIdLocatorAutocompletion": true,

            "sauce:options": {
              username: process.env.SAUCE_USERNAME,
              accessKey: process.env.SAUCE_ACCESS_KEY,
              build: "appium-build-teste-ebacshop-android",
              name: "Ebac Shop Teste",
              deviceOrientation: "PORTRAIT",
              appiumVersion: "appium2-20250901",
            },
          },
        ]
      : [
          {
            platformName: "iOS",
            "appium:deviceName": "iPhone.*",
            "appium:platformVersion": ".*",
            "appium:automationName": "XCUITest",
            "appium:app": "storage:filename=LojaEBAC.ipa",

            "sauce:options": {
              build: "appium-build-teste-ebacshop-ios",
              name: "Ebac Shop iOS",
              deviceOrientation: "PORTRAIT",
              appiumVersion: "appium2-20250901",
            },
          },
        ],

  ...generalConf,
};
