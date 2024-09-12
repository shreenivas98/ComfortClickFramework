
const { describe } = require("mocha");

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false;
  });
  
  beforeEach(function(){
    cy.fixture('Domain_URLs').then(function(data){
        this.data=data
    })
})

describe('PLP Page Filters Validation',function(){  
    
    // it('Price Filter Test ShyToBuy UK',function(){
    //   // this.data.WeightworldES.forEach(function(element){
    //   // }) 
    //   cy.visit(this.data.ShyToBuyUK,{ failOnStatusCode: false })  
    //   cy.FiltersVerification()
    // })
   
    // it('Price Filter Test ShyToBuy DK',function(){
    //   cy.visit(this.data.ShyToBuyDK)  
    //   cy.FiltersVerification()
    // })

    // it('Price Filter Test ShyToBuy FR',function(){
    //   cy.visit(this.data.ShyToBuyFR)  
    //   cy.FiltersVerification()  
    // })
    
    // it('Price Filter Test ShyToBuy SE',function(){
    //   cy.visit(this.data.ShyToBuySE)  
    //   cy.FiltersVerification() 
    // })

    it('Price Filter Test ShyToBuy DE',function(){
      cy.visit(this.data.ShyToBuyDE)  
      cy.FiltersVerification() 
    })

    it('Price Filter Test ShyToBuy NL',function(){
      cy.visit(this.data.ShyToBuyNL)  
      cy.FiltersVerification()  
    })

    // it('Price Filter Test ShyToBuy ES',function(){
    //   cy.visit(this.data.ShyToBuyES)  
    //   cy.FiltersVerification()  
    // })

    // it('Price Filter Test ShyToBuy IT',function(){
    //   cy.visit(this.data.ShyToBuyIT)  
    //   cy.FiltersVerification()
    // })
})