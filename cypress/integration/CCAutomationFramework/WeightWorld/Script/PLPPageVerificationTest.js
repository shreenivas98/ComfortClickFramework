
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
    
    it('Price Filter Test weight world ES',function(){
      // this.data.WeightworldES.forEach(function(element){
      // }) 
      cy.visit(this.data.WeightWorldES,{ failOnStatusCode: false })  
      cy.FiltersVerification()
    })
   
    it('Price Filter Test weight world UK',function(){
      cy.visit(this.data.WeightWorldUK)  
      cy.FiltersVerification()
    })

    it('Price Filter Test weight world FR',function(){
      cy.visit(this.data.WeightWorldFR)  
      cy.FiltersVerification()  
    })
    
    it('Price Filter Test weight world IT',function(){
      cy.visit(this.data.WeightWorldIT)  
      cy.FiltersVerification() 
    })

    it('Price Filter Test weight world DE',function(){
      cy.visit(this.data.WeightWorldDE)  
      cy.FiltersVerification() 
    })

    it('Price Filter Test weight world DK',function(){
      cy.visit(this.data.WeightWorldDK)  
      cy.FiltersVerification()  
    })

    it('Price Filter Test weight world SE',function(){
      cy.visit(this.data.WeightWorldSE)  
      cy.FiltersVerification()  
    })

    it('Price Filter Test weight world NL',function(){
      cy.visit(this.data.WeightWorldNL)  
      cy.FiltersVerification()
    })
})
