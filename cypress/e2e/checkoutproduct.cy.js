const homePage = require("../support/pages/home-page/homePage");

describe("Checkout Product", () => {
  before(() => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();

    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji123");
    homePage.clickLoginBtn();
    homePage.verifyLoginSuccess();
  });

  it("should successfully purchased when user place order the product", () => {
    // Click product on homepage
    homePage.selectProduct();
    // Verify product page
    cy.xpath('//div[@id="more-information"]').should("exist");

    // Click add to cart in product page
    cy.xpath('//a[normalize-space()="Add to cart"]').click();

    // Verify alert product successfully added to cart
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Product added.");
    });
    // Click cart menu
    cy.xpath('//a[@id="cartur"]').click();
    // Verify cart page by checking "Products" title / Total text / btn place order
    cy.xpath('//h2[normalize-space()="Total"]').should("be.visible");
    // Click place order btn
    cy.xpath('//button[normalize-space()="Place Order"]').click();
    // Verify place order modal appears
    cy.xpath('//div[@id="orderModal"]//div[@class="modal-header"]').should(
      "be.visible"
    );
    // Enter name
    cy.xpath('//input[@id="name"]', { timeout: 3000 })
      .should("be.visible")
      .type("Puji", { timeout: 3000 });
    // Enter country
    cy.xpath('//input[@id="country"]', { timeout: 3000 })
      .should("be.visible")
      .type("Indonesia", { timeout: 3000 });
    // Enter city
    cy.xpath('//input[@id="city"]', { timeout: 3000 })
      .should("be.visible")
      .type("Jakarta", { timeout: 3000 });
    // Enter credit card
    cy.xpath('//input[@id="card"]', { timeout: 3000 })
      .should("be.visible")
      .type("126378167", { timeout: 3000 });
    // Enter month
    cy.xpath('//input[@id="month"]', { timeout: 3000 })
      .should("be.visible")
      .type("Jan", { timeout: 3000 });
    // Enter year
    cy.xpath('//input[@id="year"]', { timeout: 3000 })
      .should("be.visible")
      .type("2024", { timeout: 3000 });
    // Click purchase btn
    cy.xpath('//button[normalize-space()="Purchase"]').click();
    // Verify purchase success by checking pop up message "Thank you for your purchase!"
    cy.xpath('//h2[normalize-space()="Thank you for your purchase!"]').should(
      "be.visible"
    );
    // Click "OK" btn
    cy.xpath('//button[normalize-space()="OK"]').click();
  });
});
