
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
describe('Grand Total Verification',function(){
    
    
     it('Cart_page_actions_for_WW/NL ',function(){
        cy.visit(this.data.WeightWorldNL)
         cy.Search_Actions()    
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MegaMenuCategoryNavigation() 
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
         cy.CartPageActions()
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

    it('Cart_page_actions_for_WW/SE ',function(){
        cy.visit(this.data.WeightWorldSE)
         cy.Search_Actions()
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MegaMenuCategoryNavigation() 
         cy.MiniCartAction()
         cy.wait(3000)
         cy.OrderTotalVerification_OnBasketPage()
         cy.CartPageActions()
     })

     it('Cart_page_actions_for_WW/DK ',function(){
        cy.visit(this.data.WeightWorldDK)
        cy.Search_Actions()
        //cy.get('.productModal .modal-header >.close').click()
        cy.SelectProductFromNewArrival()
        cy.AddToBasket_Action()
        //cy.get('.productModal .modal-header >.close').click()
        cy.MegaMenuCategoryNavigation() 
        cy.MiniCartAction()
        cy.OrderTotalVerification_OnBasketPage()
        cy.CartPageActions()
    })

    it('Cart_page_actions_for_WW/IT ',function(){
        cy.visit(this.data.WeightWorldIT)
         cy.Search_Actions()  
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MegaMenuCategoryNavigation() 
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
         cy.CartPageActions()
     })

     it('Cart_page_actions_for_WW/DE ',function(){
        cy.visit(this.data.WeightWorldDE)
         cy.Search_Actions()  
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MegaMenuCategoryNavigation() 
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
         cy.CartPageActions()
     })

})
