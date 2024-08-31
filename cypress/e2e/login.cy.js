const homePage = require('../support/pages/home-page/homePage')

describe('Login Test for Demoblaze', () => {
    before(() => {
        // Visit the Demoblaze login page
        homePage.goToHomePage()
    });

    afterEach(() => {
        // logout
        homePage.clickLogoutBtn()
    })

    it('should successfully login with valid credentials', () => {
        // Verify homepage
        homePage.verifyHomePageAppears()
        
        // Click on the login button to open the login modal
        homePage.clickLoginBtn()

        // Verify login modal appear
        // ...code

        // Fill in the login form
        cy.get('#loginusername').type('testpuji') // Ganti 'yourUsername' dengan username yang valid
        cy.get('#loginpassword').type('admin123') // Ganti 'yourPassword' dengan password yang valid

        // Submit the form
        cy.get('.btn-primary').click();

        // Verify that the login was successful by checking Welcome text / logout button
        cy.get('#logout2').should('be.visible');
    });

    it('should fail to login with invalid password', () => {
        // Verify homepage
        // ...code

        // Click on the login button to open the login modal
        cy.get('#login2').click();

        // Verify login modal appear
        // ...code

        // Fill in the login form with invalid credentials
        cy.get('#loginusername').type('invalidUsername');
        cy.get('#loginpassword').type('invalidPassword');

        // Submit the form
        cy.get('.btn-primary').click();

        // Verify that the login failed by checking for alert
        cy.get('#logout2').should('not.exist'); // Logout button should not be visible
    });

    it('should fail to login with invalid username', () => {
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

    })

    it('should fail to login with empty fields', () => {
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
    })
});
