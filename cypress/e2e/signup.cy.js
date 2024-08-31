const homePage = require("../support/pages/home-page/homePage");
const randomizeUserForSignup = require("../support/randomizeUserForSignup");

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
});
