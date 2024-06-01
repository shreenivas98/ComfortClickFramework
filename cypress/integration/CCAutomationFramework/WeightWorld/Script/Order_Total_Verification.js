
const { describe } = require("mocha");

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });


  beforeEach(function(){
    cy.fixture('URLs').then(function(data){
        this.data=data
    })
})
/// cypress spec
describe('Grand Total Verification',function(){
    
    it('Order_Total_Verification_for_WW/FR ',function(){
        cy.visit(this.data.WeightWorldFR)
         cy.Search_Actions()
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.OrderTotalVerification_For_Side_Cart_Functionality()
     })
    
    it('Order_Total_Verification_for_WW/NL ',function(){
        cy.visit(this.data.WeightWorldNL)
         cy.Search_Actions()
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
     })

    it('Order_Total_Verification_for_WW/SE ',function(){
        cy.visit(this.data.WeightWorldSE)
         cy.Search_Actions()
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
     })

   // if (testToRun.length === 0 || testToRun.includes('weightworld')) {
    it('Order_Total_Verification_for_WW/UK ',function(){
        cy.visit(Cypress.env('WeightWorldUk'))
        cy.Search_Actions()
            cy.get('.productModal .modal-header >.close').click()
            cy.SelectProductFromNewArrival()
            cy.AddToBasket_Action()
            cy.get('.productModal .modal-header >.close').click()
            cy.MiniCartAction()
            cy.OrderTotalVerification_OnBasketPage()
    })

    it('Order_Total_Verification_for_WW/DK ',function(){
       // cy.visit(Cypress.env('WeightWorldDK'))
       cy.visit(this.data.WeightWorldDK)
        cy.Search_Actions()
        cy.get('.productModal .modal-header >.close').click()
        cy.SelectProductFromNewArrival()
        cy.AddToBasket_Action()
        cy.get('.productModal .modal-header >.close').click()
        cy.MiniCartAction()
        cy.OrderTotalVerification_OnBasketPage()
    })

    it('Order_Total_Verification_for_WW/IT ',function(){
        cy.visit(this.data.WeightWorldIT)
         cy.Search_Actions()  
         cy.SelectProductFromNewArrival()
         cy.AddToBasket_Action()
         cy.MiniCartAction()
         cy.OrderTotalVerification_OnBasketPage()
     })

})
