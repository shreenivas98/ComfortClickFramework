
const { describe } = require("mocha");

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });


  beforeEach(function(){
    cy.fixture('Domain_URLs').then(function(data){
        this.data=data
    })
})
/// cypress spec
describe('Regression Suit for Weight World UK',function(){
   
   // if (testToRun.length === 0 || testToRun.includes('weightworld')) {
    it('Order_Total_Verification_for_WW/UK ',function(){
        cy.visit(Cypress.env('WeightWorldUk'))
        cy.Search_Actions()
            cy.get('.productModal .modal-header >.close').click({force:true})
            cy.SelectProductFromNewArrival()
            cy.AddToBasket_Action()
            cy.get('.productModal .modal-header >.close').click({force:true})
            cy.MegaMenuCategoryNavigation() 
            cy.MiniCartAction()
            cy.OrderTotalVerification_OnBasketPage()
    })

    it('MenuOrMega_menu_links_navigation_to_PLP_for_WWUK',function(){
        cy.visit(this.data.WeightWorldUK)
        cy.MegaMenuCategoryNavigation()        
    }) 

    it('Cart_page_actions_for_WW/UK ',function(){
        cy.visit(Cypress.env('WeightWorldUk'))
        cy.Search_Actions()
            cy.get('.productModal .modal-header >.close').click({force:true})
            cy.SelectProductFromNewArrival()
            cy.AddToBasket_Action()
            cy.get('.productModal .modal-header >.close').click({force:true})
            cy.MegaMenuCategoryNavigation() 
            cy.MiniCartAction()
            cy.OrderTotalVerification_OnBasketPage()
            cy.CartPageActions()
            
    })

    it('Price Filter Test weight world UK',function(){
        cy.visit(this.data.WeightWorldUK)  
        cy.FiltersVerification()
    })

    it('Collect and Verify URLs For WeightWorld UK',function(){
        cy.visit(this.data.WeightWorldUK)
        cy.Extract_All_URLs(this.data.WeightWorldUK)
        cy.TotalExtractedUrl()
     })
  
     it('Verify URLs return 200 status code and save failed URLs',function(){
        cy.VerifyResponseCode(this.data.WeightWorldUK) 
        cy.TotalFailedUrl()
     })
})
