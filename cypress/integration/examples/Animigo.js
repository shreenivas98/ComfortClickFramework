
const { describe } = require("mocha");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('Animigo',function(){
    it('_',function(){
     
        cy.visit("https://www.animigo.co.uk/")
        cy.get('#cookiescript_accept').click()
        cy.get('div .newArrivalsWrapper div .swiper-slide .swiper-lazy').first().click({force: true})
        
    })
    
   

})
