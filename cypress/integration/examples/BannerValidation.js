
const { describe } = require("mocha");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('Banner Validation',function(){
    it('Checkout_Flow_for_guest_user_by_search',function(){
     
        cy.visit("https://www.weightworld.uk/")
        cy.get('#cookiescript_accept').click()
        cy.get("#bannerSlides div .item a[aria-label='WeightWorld Banners'] img[title='gummies delicious filled with vitamin']").first().click()
        cy.url().should('eq', 'https://www.weightworld.uk/vitamin-gummies.html')
        cy.get('.logoDesktop > .has-retina').click()
        cy.get("button span[aria-label='Next']").first().click({force:true})
        cy.get("#bannerSlides div .item a[aria-label='WeightWorld Banners'] img[title='Become an ambassador']").first().click()
        cy.url().should('eq', 'https://www.weightworld.uk/ambassador.html')
        cy.get('.logoDesktop > .has-retina').click()
        cy.get("button span[aria-label='Next']").first().click({force:true}).click({force:true})
        cy.get("#bannerSlides div .item a[aria-label='WeightWorld Banners'] img[title='organic-supplements']").first().click()
        cy.url().should('eq','https://www.weightworld.uk/organic.html')

    })
    
   

})
