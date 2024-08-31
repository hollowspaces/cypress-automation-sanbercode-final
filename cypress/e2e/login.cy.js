const homePage = require("../support/pages/home-page/homePage");

describe("Login", () => {
  beforeEach(() => {
    homePage.goToHomePage();
  });

  it("should successfully login with valid credentials", () => {
    homePage.verifyHomePageAppears();
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji123");
    homePage.clickLoginBtn();
    homePage.verifyLoginSuccess();
    homePage.clickLogoutBtn();
    homePage.verifyLogoutSuccess();
  });

  it("should fail to login with invalid password", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji12344578");
    homePage.clickLoginBtn();
    homePage.verifyWrongPassword();
  });-

    it("should fail to login with invalid username", () => {
      // Verify homepage
      // ...code
      // Click login menu
      // ...code
      // Verify modal appears
      // ...code
      // Fill in the username field
      // ...code
      // Fill in the password field
      // ...code
      // Click login button
      // ...code
      // Verify error alert message
      // ...code
    });

  //   it("should fail to login with empty fields", () => {
  //     // Verify homepage
  //     // ...code
  //     // Click login menu
  //     // ...code
  //     // Verify modal appears
  //     // ...code
  //     // Fill in the username field
  //     // ...code
  //     // Fill in the password field
  //     // ...code
  //     // Click login button
  //     // ...code
  //     // Verify error alert message
  //     // ...code
  //   });
});
