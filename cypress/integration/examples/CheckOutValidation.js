
const { describe } = require("mocha");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('First test case',function(){
    it('Checkout_Flow_for_guest_user_by_search',function(){
     
        cy.visit("https://www.weightworld.uk/")
        cy.get('#cookiescript_accept').click()
        
        cy.get('.searchbar #algo_search').type('Super')
        //cy.get('#headerSearchHits .searchProd-name').click({multiple:true})
        cy.get('#headerSearchHits .searchProd-name').first().click()
        cy.wait(5000)
        cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()
        cy.get('#bulk_buy_qty_2').click({force: true})
        cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()

        cy.get('.cartDropBlock .dropdown-menu').invoke('show')
        cy.wait(5000)
        cy.contains('Secure').click({force: true})

    })
    
    it('Checkout_Flow_for_OOS_Product',function(){
     
        cy.visit("https://www.weightworld.uk/")
        cy.get('#cookiescript_accept').click()
        
        cy.get('.searchbar #algo_search').type('quercetin complex')
        cy.wait(4000)
        //cy.get('#headerSearchHits .searchProd-name').click({multiple:true})
        cy.get('#headerSearchHits .searchProd-name').first().click()
        cy.wait(5000)
        cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()
        cy.get('#bulk_buy_qty_2').click()
        cy.get('.col-lg-5 > :nth-child(1) > .col-sm-12 > :nth-child(4)').click()
        
        
        cy.get('.cartDropBlock .dropdown-menu').invoke('show')
        cy.wait(5000)
        cy.contains('Secure').click({force: true})

    })

})
