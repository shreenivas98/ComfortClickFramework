Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});

beforeEach(function(){
  cy.fixture('Domain_URLs').then(function(data){
      //this.data=data
      this.data=data
    })
})

describe('Solve reCAPTCHA using 2Captcha', () => {
  it('solves the CAPTCHA and logs the result', () => {
   
  
  
  
  
  
  
  });
});
