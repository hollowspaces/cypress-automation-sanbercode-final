const existUserForSignup = require("../support/utils/existUserForSignup");
const homePage = require("../support/pages/home-page/homePage");
const {
  randomizeUserForSignup,
} = require("../support/utils/randomizeUserForSignup");

describe("Sign Up", () => {
  beforeEach(() => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
  });

  it("with valid data", () => {
    // const { username, password } = randomizeUserForSignup();

    const user = randomizeUserForSignup();
    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.fillUsername(user.username);
    homePage.fillPassword(user.password);
    homePage.clickSignUpBtn();
    homePage.verifyAlertSignUpSuccess();
  });

  it("with invalid data", () => {
    const { existUsername, existUserPass } = existUserForSignup();

    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.fillUsername(existUsername);
    homePage.fillPassword(existUserPass);
    homePage.clickSignUpBtn();
    homePage.verifyAlertUserAlreadyExist();
  });

  it("with empty username and password", () => {
    homePage.clickSignUpMenu();
    homePage.verifyModalAppears();
    homePage.clickSignUpBtn();
    homePage.handlingEmptyUsernameAndPasswords();
  });
});
