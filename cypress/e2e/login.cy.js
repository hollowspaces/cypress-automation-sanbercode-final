const homePage = require("../support/pages/home-page/homePage");

describe("Login", () => {
  beforeEach(() => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
  });

  it("should successfully login with valid credentials", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji123");
    homePage.clickLoginBtn();
    homePage.verifyLoginSuccess();
    homePage.clickLogoutBtn();
    homePage.verifyLogoutSuccess();
  });

  it("should fail to login with invalid password", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji12344578");
    homePage.clickLoginBtn();
    homePage.verifyWrongPassword();
  });

  it("should fail to login with invalid username", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpujiii");
    homePage.fillLoginPassword("testpuji123");
    homePage.clickLoginBtn();
    homePage.verifyWrongUsername();
  });

  it("should fail to login with empty fields", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.clickLoginBtn();
    homePage.handlingEmptyUsernameAndPasswords();
  });
});
