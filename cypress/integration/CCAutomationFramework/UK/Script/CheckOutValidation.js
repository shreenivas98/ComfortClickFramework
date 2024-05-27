
const { describe } = require("mocha");



const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('Check Out validation_Add to basket flow',function(){
    
    if (testToRun.length === 0 || testToRun.includes('weightworld')) {
    it('New_Arrival_Slider_Verification_for_WeightWorld',function(){
        cy.visit(Cypress.env('WeightWorldUk'))
        cy.Search_Actions()
        cy.AddToBasket_Action()
    })
    }

    if (testToRun.length === 0 || testToRun.includes('shytobuy')) {
        it('New_Arrival_Slider_Verification_for_ShyToBuy',function(){
            cy.visit(Cypress.env('ShyToBuyUk'))
            cy.Search_Actions()
            cy.AddToBasket_Action()
        })
    }

    if (testToRun.length === 0 || testToRun.includes('animigo')) {
        it('New_Arrival_Slider_Verification_for_Animigo',function(){
            cy.visit(Cypress.env('AnimigoUk'))
            cy.Search_Actions()
            cy.AddToBasket_Action()
        })
    }
})
