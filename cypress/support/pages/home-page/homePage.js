const locators = require("../home-page/home-page-locator");

class homePage {
  goToHomePage() {
    cy.visit("https://www.demoblaze.com/");
  }

  verifyHomePageAppears() {
    cy.xpath(locators.datatestid.imageCompanyLogo).should("be.visible");
  }

  clickSignUpMenu() {
    cy.xpath(locators.datatestid.signUpMenu).click();
  }

  verifyModalAppears() {
    cy.xpath(locators.datatestid.signUpModals).should("exist");
    cy.wait(1000);
  }

  fillUsername(username) {
    cy.xpath(locators.datatestid.usernameField).type(username);
    cy.wait(2000);
  }

  fillPassword(password) {
    cy.xpath(locators.datatestid.passwordField).type(password);
    cy.wait(2000);
  }

  clickSignUpBtn() {
    cy.xpath(locators.datatestid.signUpBtn).click();
  }

  verifyAlertSignUpSuccess() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
  }

  clickLoginBtn() {
    cy.xpath(locators.datatestid.loginBtn).click();
  }

  clickLogoutBtn() {
    cy.xpath(locators.datatestid.logoutBtn).click();
  }
}

module.exports = new homePage();
