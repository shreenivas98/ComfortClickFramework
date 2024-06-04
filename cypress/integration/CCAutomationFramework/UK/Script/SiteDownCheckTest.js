
const { describe } = require("mocha");

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

/// cypress spec
describe('Site health',function(){

    this.beforeEach(function(){
        cy.fixture('url').then(function(data){
            this.data=data
        })
    })

    
   // if (testToRun.length === 0 || testToRun.includes('weightworld')) {
    it('SiteUpCheckTest_for_all_WeightWorld_websites',function(){
            this.data.weightworld.forEach(function(element){
            cy.visit(element)  
            cy.request(element).then((response) => {
                expect(response.status).to.eq(200);
              });
        })   
    })

    it('SiteUpCheckTest_for_all_Animigo_websites',function(){
        this.data.animigo.forEach(function(element){
        cy.visit(element)  
        cy.request(element).then((response) => {
            expect(response.status).to.eq(200);
          });
    })   
})

    it('SiteUpCheckTest_for_all_ShyToBuy_websites',function(){
            this.data.shytobuy.forEach(function(element){
            cy.visit(element)  
            cy.request(element).then((response) => {
                expect(response.status).to.eq(200);
              });
        })   
    })
})
