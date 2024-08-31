const {
  validLoginCredentials,
} = require("../support/utils/userLoginCredentials");
const homePage = require("../support/pages/home-page/homePage");
const productPage = require("../support/pages/product-page/productPage");
const cartPage = require("../support/pages/cart-page/cartPage");

describe("Checkout Product", () => {
  before(() => {
    const user = validLoginCredentials();

    homePage.goToHomePage();
    homePage.verifyHomePageAppears();

    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername(user.username);
    homePage.fillLoginPassword(user.password);
    homePage.clickLoginBtn();
    homePage.verifyLoginSuccess();
  });

  it("should successfully purchased when user place order the product", () => {
    homePage.selectProduct();
    productPage.verifyProductPage();
    productPage.clickAddToCartBtn();
    productPage.verifyProductSucessfullyAdded();
    productPage.clickCartMenu();

    cartPage.verifyCartPage();
    cartPage.clickPlaceOrderBtn();
    cartPage.verifyPlaceOrderModalAppears();
    cartPage.fillName();
    cartPage.fillCountry();
    cartPage.fillCity();
    cartPage.fillCreditCard();
    cartPage.fillMonth();
    cartPage.fillYear();

    cartPage.clickPurchaseBtn();
    cartPage.verifyPurchaseSuccess();
    cartPage.clickOkayBtn();
  });
});
