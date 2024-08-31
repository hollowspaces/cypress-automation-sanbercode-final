const homePage = require("../support/pages/home-page/homePage");
const {
  validLoginCredentials,
  invalidLoginPassword,
  invalidUsernameValidPassword,
} = require("../support/utils/userLoginCredentials");

describe("Login", () => {
  beforeEach(() => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
  });

  it("should successfully login with valid credentials", () => {
    const user = validLoginCredentials();

    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername(user.username);
    homePage.fillLoginPassword(user.password);
    homePage.clickLoginBtn();
    homePage.verifyLoginSuccess();
    homePage.clickLogoutBtn();
    homePage.verifyLogoutSuccess();
  });

  it("should fail to login with invalid password", () => {
    const user = invalidLoginPassword();

    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername(user.username);
    homePage.fillLoginPassword(user.password);
    homePage.clickLoginBtn();
    homePage.verifyWrongPassword();
  });

  it("should fail to login with invalid username", () => {
    const user = invalidUsernameValidPassword();

    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername(user.username);
    homePage.fillLoginPassword(user.password);
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
