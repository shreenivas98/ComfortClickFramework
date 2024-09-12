
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
    
    it('Price Filter Test Animigo UK',function(){
      // this.data.WeightworldES.forEach(function(element){
      // }) 
      cy.visit(this.data.AnimigoUK,{ failOnStatusCode: false })  
      cy.FiltersVerification()
    })
   
    it('Price Filter Test Animigo DK',function(){
      cy.visit(this.data.AnimigoDK)  
      cy.FiltersVerification()
    })

    it('Price Filter Test Animigo FR',function(){
      cy.visit(this.data.AnimigoFR)  
      cy.FiltersVerification()  
    })
    
    it('Price Filter Test Animigo SE',function(){
      cy.visit(this.data.AnimigoSE)  
      cy.FiltersVerification() 
    })

    it('Price Filter Test Animigo DE',function(){
      cy.visit(this.data.AnimigoDE)  
      cy.FiltersVerification() 
    })

    it('Price Filter Test Animigo NL',function(){
      cy.visit(this.data.AnimigoNL)  
      cy.FiltersVerification()  
    })

    it('Price Filter Test Animigo ES',function(){
      cy.visit(this.data.AnimigoES)  
      cy.FiltersVerification()  
    })

    it('Price Filter Test Animigo IT',function(){
      cy.visit(this.data.AnimigoIT)  
      cy.FiltersVerification()
    })
})