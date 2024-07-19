
const { describe } = require("mocha");

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false;
  });
  beforeEach(function(){
    cy.fixture('categoryURL').then(function(data){
        this.data=data
    })
})

describe('PLP Page Filters Validation',function(){
    
    it('Price Filter Test weight world ES',function(){
      this.data.WeightworldES.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
        cy.VerifyPriceFilter()
        cy.AddToBasketOnPLP()
      })    
    })
   
    it('Price Filter Test weight world UK',function(){
      this.data.weightworldUK.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
        cy.VerifyPriceFilter()
        cy.AddToBasketOnPLP()
      })   
    })

    it('Price Filter Test weight world FR',function(){
      this.data.WeightworldFR.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })
    
    it('Price Filter Test weight world IT',function(){
      this.data.WeightworldIT.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })

    it('Price Filter Test weight world DE',function(){
      this.data.WeightworldDE.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })

    it('Price Filter Test weight world DK',function(){
      this.data.WeightworldDK.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })

    it('Price Filter Test weight world SE',function(){
      this.data.WeightworldSE.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })

    it('Price Filter Test weight world NL',function(){
      this.data.WeightworldNL.forEach(function(element){
        cy.visit(element)  
        cy.HandlePriceSlider()
      cy.VerifyPriceFilter()
      })   
    })
})
