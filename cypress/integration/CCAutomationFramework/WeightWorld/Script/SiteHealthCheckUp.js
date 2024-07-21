
const { describe } = require("mocha");
const newUrlPath = "cypress/fixtures/ExtractedURL's.json";
const failedUrlsBasePath = 'cypress/fixtures/failed_urls.json';

let accumulatedFailedUrls = [];
let testCounter = 0;
let itCounter = 0; 

//const testToRun = Cypress.env('UK_Domain');
//const testToRun = Cypress.env('UK_Domain') ? Cypress.env('UK_Domain').split(',') : [];


Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

//   before(function(){
//    cy.writeFile(failedUrlsBasePath, []);
//   })

  beforeEach(function(){
    cy.fixture('Domain_URLs').then(function(data){
        this.data=data
    })

    itCounter++;
    if (itCounter % 2 === 1) { // Adjust to clear before the 1st `it` in every 3
      cy.writeFile(newUrlPath, []);
    }
   
})
/// cypress spec
describe('Site Health Check',function(){
    
   //  it('HealthCheckUpForWWFR',function(){
   //      cy.visit(this.data.WeightWorldFR)
   //      cy.Extract_All_URLs()
   //      cy.VisitEachCategory() 
   //   })


   it('Collect and Verify URLs For Animigo UK',function(){
      cy.visit(this.data.AnimigoUK)
      cy.Extract_All_URLs(this.data.AnimigoUK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo DK',function(){
      cy.visit(this.data.AnimigoDK)
      cy.Extract_All_URLs(this.data.AnimigoDK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo IT',function(){
      cy.visit(this.data.AnimigoIT)
      cy.Extract_All_URLs(this.data.AnimigoIT)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo FR',function(){
      cy.visit(this.data.AnimigoFR)
      cy.Extract_All_URLs(this.data.AnimigoFR)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo SE',function(){
      cy.visit(this.data.AnimigoSE)
      cy.Extract_All_URLs(this.data.AnimigoSE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo DE',function(){
      cy.visit(this.data.AnimigoDE)
      cy.Extract_All_URLs(this.data.AnimigoDE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For Animigo NL',function(){
      cy.visit(this.data.AnimigoNL)
      cy.Extract_All_URLs(this.data.AnimigoNL)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld UK',function(){
      cy.visit(this.data.WeightWorldUK)
      cy.Extract_All_URLs(this.data.WeightWorldUK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld DK',function(){
      cy.visit(this.data.WeightWorldDK)
      cy.Extract_All_URLs(this.data.WeightWorldDK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld IT',function(){
      cy.visit(this.data.WeightWorldIT)
      cy.Extract_All_URLs(this.data.WeightWorldIT)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld FR',function(){
      cy.visit(this.data.WeightWorldFR)
      cy.Extract_All_URLs(this.data.WeightWorldFR)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld SE',function(){
      cy.visit(this.data.WeightWorldSE)
      cy.Extract_All_URLs(this.data.WeightWorldSE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld NL',function(){
      cy.visit(this.data.WeightWorldNL)
      cy.Extract_All_URLs(this.data.WeightWorldNL)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For WeightWorld DE',function(){
      cy.visit(this.data.WeightWorldDE)
      cy.Extract_All_URLs(this.data.WeightWorldDE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy UK',function(){
      cy.visit(this.data.ShyToBuyUK)
      cy.Extract_All_URLs(this.data.ShyToBuyUK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy DK',function(){
      cy.visit(this.data.ShyToBuyDK)
      cy.Extract_All_URLs(this.data.ShyToBuyDK)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy IT',function(){
      cy.visit(this.data.ShyToBuyIT)
      cy.Extract_All_URLs(this.data.ShyToBuyIT)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy FR',function(){
      cy.visit(this.data.ShyToBuyFR)
      cy.Extract_All_URLs(this.data.ShyToBuyFR)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy SE',function(){
      cy.visit(this.data.ShyToBuySE)
      cy.Extract_All_URLs(this.data.ShyToBuySE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy DE',function(){
      cy.visit(this.data.ShyToBuyDE)
      cy.Extract_All_URLs(this.data.ShyToBuyDE)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   it('Collect and Verify URLs For ShyToBuy NL',function(){
      cy.visit(this.data.ShyToBuyNL)
      cy.Extract_All_URLs(this.data.ShyToBuyNL)
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode() 
   })

   after(() => {
      cy.SendEmail()
      cy.wait(2000)
      cy.writeFile(failedUrlsBasePath, []);
      
       
    });

})
