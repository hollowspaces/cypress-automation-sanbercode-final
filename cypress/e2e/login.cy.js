const homePage = require("../support/pages/home-page/homePage");

describe("Login", () => {
  beforeEach(() => {
    homePage.goToHomePage();
    homePage.verifyHomePageAppears();
  });

  it("should successfully login with valid credentials", () => {
    homePage.clickLoginMenu();
    homePage.verifyLoginModalAppears();
    homePage.fillLoginUsername("testpuji");
    homePage.fillLoginPassword("testpuji123");
    homePage.clickLoginBtn();

    // Verify that the login was successful by checking Welcome text / logout button
    homePage.verifyLoginSuccess();
  });

  //   it("should fail to login with invalid password", () => {
  //     // Verify homepage
  //     // ...code
  //     // Click on the login button to open the login modal
  //     // Verify login modal appear
  //     // ...code
  //     // Fill in the login form with invalid credentials
  //     // Submit the form
  //     // Verify that the login failed by checking for alert
  //   });

  //   it("should fail to login with invalid username", () => {
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

  afterEach(() => {
    homePage.clickLogoutBtn();
    homePage.verifyLogoutSuccess();
  });
});
