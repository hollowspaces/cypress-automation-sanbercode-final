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
    cy.xpath(locators.datatestid.usernameField, { timeout: 5000 })
      .should("be.visible")
      .type(username, { timeout: 5000 });
  }

  fillPassword(password) {
    cy.xpath(locators.datatestid.passwordField, { timeout: 5000 })
      .should("be.visible")
      .type(password, { timeout: 5000 });
  }

  clickSignUpBtn() {
    cy.xpath(locators.datatestid.signUpBtn).click();
  }

  verifyAlertSignUpSuccess() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
  }

  verifyAlertUserAlreadyExist() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("This user already exist.");
    });
  }

  handlingEmptyUsernameAndPasswords() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });
  }

  clickLoginMenu() {
    cy.xpath(locators.datatestid.loginMenu).click();
  }

  verifyLoginModalAppears() {
    cy.xpath(locators.datatestid.loginModal).should("exist");
    cy.wait(1000);
  }

  fillLoginUsername(loginUsername) {
    cy.xpath(locators.datatestid.loginUsernameField, { timeout: 5000 })
      .should("be.visible")
      .type(loginUsername, { timeout: 5000 });
  }

  fillLoginPassword(loginPassword) {
    cy.xpath(locators.datatestid.loginPasswordField, { timeout: 5000 })
      .should("be.visible")
      .type(loginPassword, { timeout: 5000 });
  }

  clickLoginBtn() {
    cy.xpath(locators.datatestid.loginBtn).click();
  }

  verifyLoginSuccess() {
    cy.xpath(locators.datatestid.nameOfUserTxt).should("be.visible");
  }

  clickLogoutBtn() {
    cy.xpath(locators.datatestid.logoutBtn).click();
  }

  verifyLogoutSuccess() {
    cy.xpath(locators.datatestid.nameOfUserTxt).should("not.be.visible");
  }

  verifyWrongPassword() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });
  }

  verifyWrongUsername() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("User does not exist.");
    });
  }

  selectProduct() {
    cy.xpath('//div[@id="tbodyid"]//div[1]//div[1]//a[1]//img[1]').click();
  }
}

module.exports = new homePage();
