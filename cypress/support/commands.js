// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//Custom command to handle the pop-up
// Cypress.Commands.add('handlePopup', () => {
//     return cy.contains('Secure').then(popup => { // Make sure to return the promise here
//       if (popup.length > 0) {
//         return cy.get('#addToBasket > .modal-dialog > .modal-content > .modal-header > .close').click(); // Adjust this selector based on your actual close button
//       }
//     });
//   });
  
//   Cypress.on('fail', (error, runnable) => {
//     // Check if the failure is due to a Cypress command
//     if (error.source === 'cy'){
//       // Handle the pop-up before retrying the failed test step
//       cy.handlePopup().then(() => {
//         runnable.retry();
//       });
  
//       return false;
//     }
//   });
 
// Custom command to handle the overlay

  
  