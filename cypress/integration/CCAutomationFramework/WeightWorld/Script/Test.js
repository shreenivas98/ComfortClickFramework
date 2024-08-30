
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

it('TestITBlock', ()=>{

    
        cy.visit('https://www.weightworld.uk/');
        cy.log("ABCD");
        
        
    
    
       

})
    

})
