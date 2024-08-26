describe('Assignment 1',function (){

  beforeEach(() => {
    // Intercept the reCAPTCHA verification request
    // cy.intercept('POST', 'https://www.google.com/recaptcha/api2/userverify?k=6LeZctMUAAAAALtT2MAJy68rXEm-1d3EybYov5Ic', {
    //   statusCode: 200, 
    //   body: { success: true },
    // }).as('captchaVerification');
    cy.intercept('POST', 'https://www.google.com/recaptcha/api2/userverify?k=6LeZctMUAAAAALtT2MAJy68rXEm-1d3EybYov5Ic', (req) => {
      req.reply({ captchaPassed: true });
    });
  });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
      });

    // it('Check Number of Product cards', function() {

    //     cy.visit('https://magento.softwaretestingboard.com/')
    //     cy.get('ul li').then($aTags => {
    //     const numberOfLinks = $aTags.length;
    //     cy.log('Number of product cards: ' + numberOfLinks);
    //     //expect(numberoflinks).to.be.greaterThan(0);
    //      })
    // })


    // it('Check Sub Cateories', function (){
    //     cy.visit('https://magento.softwaretestingboard.com/')
    //     cy.get('.nav-4 ul li').then($el => {
    //         const catnum = $el.length;
    //     cy.log('Number of Subcategories '+catnum)
    //     })

    //     cy.get('.nav-4 ul li a').each($e1 => {
    //         const catname = $e1.text();
    //     expect(['Bags', 'Fitness Equipment', 'Watches']).to.include(catname)
        
    //     })

        
    // })

    // it('sign in & create account', function (){
    //     cy.visit('https://magento.softwaretestingboard.com/')
    //     cy.get('.page-header .authorization-link').click()
    //     cy.get('a.create').click()
    //     cy.get('#firstname').type('TestFirstName')
    //     cy.get('#lastname').type('TestLastName')
    //     cy.get('#email_address').type('testshreenivas@gmail.com')
    //     cy.get('#password').type('Test@Pass1234')
    //     cy.get('#password-confirmation').type('Test@Pass1234')
    //     cy.get('div button.submit').click()
    // })


    it('Captcha Mocking', function (){
        
        
        
        
          
          cy.visit('https://www.weightworld.uk/login.html')
        cy.wait(2000)
           cy.get('#cookiescript_accept').click()
           cy.get('#user_name').type('shreeniwas.ukhale@comfortclick.co.uk');
           cy.get('#password').type('eb275e4d');
        //cy.get('.recaptcha-checkbox').check()
          
          
          // Wait for the mocked CAPTCHA verification to complete
          
          cy.get('#login').click();
         // cy.wait('@captchaVerification');

    })
})