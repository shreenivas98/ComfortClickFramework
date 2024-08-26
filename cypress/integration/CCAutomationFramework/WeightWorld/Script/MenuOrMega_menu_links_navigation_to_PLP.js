
const { describe } = require("mocha");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('Mega Menu Redirections',function(){

    this.beforeEach(function(){
        cy.fixture('Domain_URLs').then(function(data){
            this.data=data
        })
    })

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWUK',function(){
        cy.visit(this.data.WeightWorldUK)
        cy.MegaMenuCategoryNavigation()        
    }) 
    
    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWFR',function(){ 
        cy.visit(this.data.WeightWorldFR)
        cy.MegaMenuCategoryNavigation()
    })  

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWDK',function(){
        cy.visit(this.data.WeightWorldDK)
        cy.MegaMenuCategoryNavigation()
    }) 

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWIT',function(){
        cy.visit(this.data.WeightWorldIT)
        cy.MegaMenuCategoryNavigation()  
    }) 

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWSE',function(){
        cy.visit(this.data.WeightWorldSE)
        cy.MegaMenuCategoryNavigation()
    }) 

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWNL',function(){
        cy.visit(this.data.WeightWorldNL)
        cy.MegaMenuCategoryNavigation()
    }) 

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWDE',function(){
        cy.visit(this.data.WeightWorldDE)
        cy.MegaMenuCategoryNavigation()
    }) 
})