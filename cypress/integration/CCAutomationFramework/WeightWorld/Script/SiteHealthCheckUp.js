
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
describe('Site Health Check',function(){
    
    it('HealthCheckUpForWWFR',function(){
        cy.visit(this.data.AnimigoUK)
        cy.Extract_All_URLs()
        cy.VisitEachCategory() 
     })
    
     it('HealthCheckUpForWWUK',function(){
        cy.visit(this.data.AnimigoDK)
        cy.Extract_All_URLs()
        cy.VisitEachCategory() 
     })
     
     it('HealthCheckUpForWWDK',function(){
        cy.visit(this.data.AnimigoIT)
        cy.Extract_All_URLs()
        cy.VisitEachCategory() 
     })

     it('HealthCheckUpForWWDE',function(){
        cy.visit(this.data.WeightWorldDE)
        cy.Extract_All_URLs()
        cy.VisitEachCategory() 
     })

     it('HealthCheckUpForWWIT',function(){
        cy.visit(this.data.WeightWorldIT)
        cy.Extract_All_URLs()
        cy.VisitEachCategory()
     })
     
     it('HealthCheckUpForWWSE',function(){
        cy.visit(this.data.WeightWorldSE)
        cy.Extract_All_URLs()
        cy.VisitEachCategory()
     })

     it('HealthCheckUpForWWNL',function(){
        cy.visit(this.data.WeightWorldNL)
        cy.Extract_All_URLs()
        cy.VisitEachCategory()
     })
})
