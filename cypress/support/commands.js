import HomePageUk from "../integration/CCAutomationFramework/UK/PageElements/HomePageUK"
import HeaderUK from "../integration/CCAutomationFramework/UK/PageElements/HeaderUK"
//import PdpUK from "../integration/CCAutomationFramework/UK/PageElements/pdpUK"
import DetailsPage from "../integration/CCAutomationFramework/UK/PageElements/DetailsPage"

const homaPageUK = new HomePageUk()
const headerUK = new HeaderUK()
//const pdpUK = new PdpUK()
const detailsPage = new DetailsPage()

Cypress.Commands.add('HomePage_Actions', () => {  
    homaPageUK.acceptCookieButton().click()
    homaPageUK.newArrivalSlider().should("be.visible")
    homaPageUK.featuredProducts().should("be.visible") 
    homaPageUK.heroBanner().should("be.visible")
   // homaPageUK.ambassadorFavourites().should("be.visible")
})  

Cypress.Commands.add('Search_Actions', () => {  
    homaPageUK.acceptCookieButton().click()
    headerUK.serachBox()
    headerUK.searchedProductName()    
})

// Cypress.Commands.add('AddToBasket_Action', () => {  
//     pdpUK.AddToBasket_WW()
//         // Check if the URL contains "ANI"
//         if (cy.url().contains('weightworld')) {
//             pdpUK.AddToBasket_WW()
            
//         } 

//         if (url.includes('shy')) {
//             pdpUK.AddToBasket_STB()
            
//         } 

//         if (url.includes('animigo')) {
//             pdpUK.AddToBasket()
            
//         }
//     })

Cypress.Commands.add('AddToBasket_Action', ()=>{
    cy.url().then(url => {
    if(url.includes('weightworld')){
        detailsPage.AddToBasket_WW()
    }

    if(url.includes('shy')){
        detailsPage.AddToBasket_STB()
    }

    if (url.includes('animigo')){
        detailsPage.AddToBasket_Animigo()
    }
    else{
        cy.log("Code goes in Else Part ")
    }
    
})})



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





  
  