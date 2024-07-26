
const { describe } = require("mocha");
const newUrlPath = "cypress/fixtures/ExtractedURL's.json";



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

   it('Collect and Verify URLs For Animigo UK',function(){
      cy.visit(this.data.AnimigoUK)
      cy.Extract_All_URLs(this.data.AnimigoUK)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoUK) 
      cy.TotalFailedUrl()
    })

   it('Collect and Verify URLs For Animigo DK',function(){
      cy.visit(this.data.AnimigoDK)
      cy.Extract_All_URLs(this.data.AnimigoDK)
      cy.TotalExtractedUrl()
   })
   
   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoDK) 
      cy.TotalFailedUrl()
    })

   it('Collect and Verify URLs For Animigo IT',function(){
      cy.visit(this.data.AnimigoIT)
      cy.Extract_All_URLs(this.data.AnimigoIT)
      cy.TotalExtractedUrl()
   })
 
   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoIT) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For Animigo FR',function(){
      cy.visit(this.data.AnimigoFR)
      cy.Extract_All_URLs(this.data.AnimigoFR)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoFR)
      cy.TotalFailedUrl() 
   })

   it('Collect and Verify URLs For Animigo SE',function(){
      cy.visit(this.data.AnimigoSE)
      cy.Extract_All_URLs(this.data.AnimigoSE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoSE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For Animigo DE',function(){
      cy.visit(this.data.AnimigoDE)
      cy.Extract_All_URLs(this.data.AnimigoDE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoDE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For Animigo NL',function(){
      cy.visit(this.data.AnimigoNL)
      cy.Extract_All_URLs(this.data.AnimigoNL)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.AnimigoNL) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld UK',function(){
      cy.visit(this.data.WeightWorldUK)
      cy.Extract_All_URLs(this.data.WeightWorldUK)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldUK) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld DK',function(){
      cy.visit(this.data.WeightWorldDK)
      cy.Extract_All_URLs(this.data.WeightWorldDK)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldDK) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld IT',function(){
      cy.visit(this.data.WeightWorldIT)
      cy.Extract_All_URLs(this.data.WeightWorldIT)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldIT) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld FR',function(){
      cy.visit(this.data.WeightWorldFR)
      cy.Extract_All_URLs(this.data.WeightWorldFR)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldFR) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld SE',function(){
      cy.visit(this.data.WeightWorldSE)
      cy.Extract_All_URLs(this.data.WeightWorldSE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldSE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld NL',function(){
      cy.visit(this.data.WeightWorldNL)
      cy.Extract_All_URLs(this.data.WeightWorldNL)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldNL) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For WeightWorld DE',function(){
      cy.visit(this.data.WeightWorldDE)
      cy.Extract_All_URLs(this.data.WeightWorldDE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.WeightWorldDE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy UK',function(){
      cy.visit(this.data.ShyToBuyUK)
      cy.Extract_All_URLs(this.data.ShyToBuyUK)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyUK)
      cy.TotalFailedUrl() 
   })

   it('Collect and Verify URLs For ShyToBuy DK',function(){
      cy.visit(this.data.ShyToBuyDK)
      cy.Extract_All_URLs(this.data.ShyToBuyDK)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyDK)
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy IT',function(){
      cy.visit(this.data.ShyToBuyIT)
      cy.Extract_All_URLs(this.data.ShyToBuyIT)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyIT) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy FR',function(){
      cy.visit(this.data.ShyToBuyFR)
      cy.Extract_All_URLs(this.data.ShyToBuyFR)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyFR) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy SE',function(){
      cy.visit(this.data.ShyToBuySE)
      cy.Extract_All_URLs(this.data.ShyToBuySE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuySE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy DE',function(){
      cy.visit(this.data.ShyToBuyDE)
      cy.Extract_All_URLs(this.data.ShyToBuyDE)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyDE) 
      cy.TotalFailedUrl()
   })

   it('Collect and Verify URLs For ShyToBuy NL',function(){
      cy.visit(this.data.ShyToBuyNL)
      cy.Extract_All_URLs(this.data.ShyToBuyNL)
      cy.TotalExtractedUrl()
   })

   it('Verify URLs return 200 status code and save failed URLs',function(){
      cy.VerifyResponseCode(this.data.ShyToBuyNL) 
      cy.TotalFailedUrl()
   })

   after(() => {
    cy.SumofTotal_Verified_URL()
    cy.SumofTotal_failed_URL()
    cy.wait(2000)
    cy.SendEmail()
    cy.wait(2000)
    cy.Resetfiles()
    });
})
