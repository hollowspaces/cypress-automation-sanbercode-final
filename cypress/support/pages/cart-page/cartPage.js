const locators = require("../cart-page/cart-page-locator");

class cartPage {
  verifyCartPage() {
    cy.xpath(locators.datatestid.totalPriceText).should("be.visible");
    cy.wait(2000);
  }

  clickPlaceOrderBtn() {
    cy.xpath(locators.datatestid.placeOrderBtn).click();
  }

  verifyPlaceOrderModalAppears() {
    cy.xpath(locators.datatestid.placeOrderModal).should("be.visible");
    cy.wait(500);
  }

  fillName() {
    cy.xpath(locators.datatestid.nameField, { timeout: 3000 })
      .should("be.visible")
      .type("Puji", { timeout: 3000 });
  }

  fillCountry() {
    cy.xpath(locators.datatestid.countryField, { timeout: 3000 })
      .should("be.visible")
      .type("Indonesia", { timeout: 3000 });
  }

  fillCity() {
    cy.xpath(locators.datatestid.cityField, { timeout: 3000 })
      .should("be.visible")
      .type("Jakarta", { timeout: 3000 });
  }

  fillCreditCard() {
    cy.xpath(locators.datatestid.creditCardField, { timeout: 3000 })
      .should("be.visible")
      .type("126378167", { timeout: 3000 });
  }

  fillMonth() {
    cy.xpath(locators.datatestid.monthField, { timeout: 3000 })
      .should("be.visible")
      .type("Jan", { timeout: 3000 });
  }

  fillYear() {
    cy.xpath(locators.datatestid.yearField, { timeout: 3000 })
      .should("be.visible")
      .type("2024", { timeout: 3000 });
  }

  clickPurchaseBtn() {
    cy.xpath(locators.datatestid.purchaseBtn).click();
  }

  verifyPurchaseSuccess() {
    cy.xpath(locators.datatestid.popUpPurchaseSuccess).should("be.visible");
  }

  clickOkayBtn() {
    cy.xpath(locators.datatestid.okayBtn).click();
  }
}

module.exports = new cartPage();
