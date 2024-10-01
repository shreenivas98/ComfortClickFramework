describe('Assignment 1',function (){

  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
      });

    
    it('should extract all URLs from the source code of the WeightWorld homepage and verify their response codes', () => {
      //cy.visit("https://www.weightworld.es/tonificación-muscular.html");
      cy.request("https://www.flickr.com/photos/404error1")
      
    });
    
    
})