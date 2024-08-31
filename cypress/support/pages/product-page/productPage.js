const locators = require("../product-page/product-page-locator");

class productPage {
  verifyProductPage() {
    cy.xpath(locators.datatestid.productDetailInfo).should("exist");
  }

  clickAddToCartBtn() {
    cy.xpath(locators.datatestid.addToCartBtn).click();
  }

  verifyProductSucessfullyAdded() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Product added.");
    });
  }

  clickCartMenu() {
    cy.xpath(locators.datatestid.cartMenu).click();
  }
}

module.exports = new productPage();
