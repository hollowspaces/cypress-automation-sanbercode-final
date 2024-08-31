const existUserForSignup = require("../support/utils/existUserForSignup");
const homePage = require("../support/pages/home-page/homePage");
const randomizeUserForSignup = require("../support/utils/randomizeUserForSignup");

describe("Sign Up", () => {
  it("with valid data", () => {
    const { username, password } = randomizeUserForSignup();

    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.fillUsername(username);
    homePage.fillPassword(password);
    homePage.clickSignUpBtn();
    homePage.verifyAlertSignUpSuccess();
  });

  it("with invalid data", () => {
    const { existUsername, existUserPass } = existUserForSignup();

    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.fillUsername(existUsername);
    homePage.fillPassword(existUserPass);
    homePage.clickSignUpBtn();
    homePage.verifyAlertUserAlreadyExist();
  });

  it("with empty username and password", () => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.clickSignUpBtn();
    homePage.handlingEmptyUsernameAndPasswords();
  });
});
