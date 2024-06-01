import HomePageUk from "../integration/CCAutomationFramework/UK/PageElements/HomePageUK"
import HeaderUK from "../integration/CCAutomationFramework/UK/PageElements/HeaderUK"
import DetailsPage from "../integration/CCAutomationFramework/UK/PageElements/DetailsPage"
import CartPage from "../integration/CCAutomationFramework/UK/PageElements/CartPage"

const homaPageUK = new HomePageUk()
const headerUK = new HeaderUK()
const detailsPage = new DetailsPage()
const cartPage = new CartPage()

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
   // headerUK.searchedProductName()    
   headerUK.serachAddToBasket()
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
        cy.get('.qtyPickerForDesktop').then($el =>{
            if($el.is(':visible')){
                detailsPage.PlusButton()
                detailsPage.AddToBasket_WW()    
            }
            else{
                cy.wait(5000)
                detailsPage.BulkBuy_Three_Qty()
                detailsPage.AddToBasket_WW()
                //detailsPage.Frequently_Baught_AddToCArt()
            }
        });
              
    }

    if(url.includes('shy')){
        detailsPage.AddToBasket_STB()

        cy.get('.qtyPickerForDesktop').then($el =>{
            if($el.is(':visible')){
                detailsPage.PlusButton()
                detailsPage.PlusButton()
                cy.wait(5000)
                detailsPage.PlusButton()
                detailsPage.AddToBasket_STB()
            }
            else{
                detailsPage.BulkBuy_Two_Qty()
                detailsPage.AddToBasket_STB()        
            }
        });
        
    }

    if (url.includes('animigo')){
        detailsPage.AddToBasket_Animigo()
        cy.get('.qtyPickerForDesktop').then($el =>{
            if($el.is(':visible')){
                detailsPage.PlusButton()
                cy.wait(5000)
                detailsPage.PlusButton()
                detailsPage.AddToBasket_Animigo()
            }
            else{
                detailsPage.BulkBuy_Two_Qty()
                detailsPage.AddToBasket_Animigo()        
            }
        });
    }
    else{
        cy.log("Code goes in Else Part ")
    }
    
})})

Cypress.Commands.add('MiniCartAction', () => { 
    
    headerUK.invokeCart()
    headerUK.secureCheckout()    

})

Cypress.Commands.add('SelectProductFromNewArrival', () => { 
      homaPageUK.newArrivalProduct()
})


//Verification Of order total with all added products to cart 
        var sum=0
        var roundedSum

Cypress.Commands.add('OrderTotalVerification_For_Side_Cart_Functionality',()=>{
    
    cartPage.ProductTotalFR().each(($el,index,$list) => {
        const amount = $el.text()
        var res=amount.split("€")
            res=res[0].trim()
            sum=Number(sum)+Number(res)
    }).then(function()
    {
        roundedSum =sum.toFixed(2);
        cy.log(roundedSum);
    })

    cartPage.GrandTotalFR().then(function(element){
        const amount = element.text()
        var total=amount.split("€")
            total=total[0].trim()
            expect(Number(total)).to.equal(Number(roundedSum))
    })
})

Cypress.Commands.add('OrderTotalVerification_OnBasketPage',()=>{

    cy.url().then(CurrentURL => {
    cartPage.ProductTotal().each(($el,index,$list) => {
        const amount = $el.text()

        if(CurrentURL.includes('weightworld.dk')){
            var res=amount.split(" ")
            res=res[0].trim()
        }

        if(CurrentURL.includes('weightworld.it')||CurrentURL.includes('weightworld.nl')){
            var res=amount.split("€")
            res=res[0].trim()
        }

        if(CurrentURL.includes('weightworld.uk')){
            var res=amount.split("£")
            res=res[1].trim() //res[] stands fir 1st index of seperated value
            
        }

        if(CurrentURL.includes('weightworld.se')){
            var res=amount.split("K")
            res=res[0].trim()
        }
            
            sum=Number(sum)+Number(res)
    }).then(function()
    {
        roundedSum =sum.toFixed(2);
        cy.log(roundedSum);
    })

    cartPage.GrandTotal().then(function(element){
        const amount = element.text()

        if(CurrentURL.includes('weightworld.dk')){
            var total=amount.split(" ")
            total=total[0].trim()
        }

        if(CurrentURL.includes('weightworld.it') ||CurrentURL.includes('weightworld.nl') ){
            var total=amount.split("€")
            total=total[0].trim()
        }

        if(CurrentURL.includes('weightworld.uk')){
            var total=amount.split("£")
            total=total[1].trim()
        }

        if(CurrentURL.includes('weightworld.se')){
            var total=amount.split("K")
            total=total[0].trim()
        }

            // if(Number(total)==Number(roundedSum)){
            //     cy.log(total)
            //     cy.log('Actual order total matched with expected');
            // }
            // else{
            //     cy.log('Actual order total does not matched with expeted')
            // }
            expect(Number(total)).to.equal(Number(roundedSum))
            
    })


    })
})





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





  
  