import HomePageUk from "../integration/CCAutomationFramework/UK/PageElements/HomePageUK"
import HeaderUK from "../integration/CCAutomationFramework/UK/PageElements/HeaderUK"
import DetailsPage from "../integration/CCAutomationFramework/UK/PageElements/DetailsPage"
import CartPage from "../integration/CCAutomationFramework/UK/PageElements/CartPage"
import PLP from "../integration/CCAutomationFramework/WeightWorld/Pages/PLP"
import { assert } from "chai"

const homaPageUK = new HomePageUk()
const headerUK = new HeaderUK()
const detailsPage = new DetailsPage()
const cartPage = new CartPage()
const plpPage =new PLP()
let accumulatedFailedUrls = [];
let categoryUrls = [];
let itCounter = 0; 
const ProPrice = [];

let totalExtractedURLs
let totalFailedURLs
const urlsPath = "cypress/fixtures/ExtractedURL's.json";
const failedUrlsBasePath = 'cypress/fixtures/failed_urls.json';
const realtotal = 'cypress/fixtures/TotalURLCount.json' ;
const realfailed = 'cypress/fixtures/TotalFailCount.json' ;
const snapshot = 'cypress/screenshots'


let totalUrlsExtracted = 0;
let totalFailedUrls = 0;
let totalUrlsExtractedReal = 0;





Cypress.Commands.add('Accept_Cookies', () => {  
    homaPageUK.acceptCookieButton().click()
})  


Cypress.Commands.add('HomePage_Actions', () => {  
    cy.Accept_Cookies()
    homaPageUK.newArrivalSlider().should("be.visible")
    homaPageUK.featuredProducts().should("be.visible") 
    homaPageUK.heroBanner().should("be.visible")
   // homaPageUK.ambassadorFavourites().should("be.visible")
   
})  

Cypress.Commands.add('Search_Actions', () => { 
    cy.Accept_Cookies()
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
    })})

Cypress.Commands.add('MiniCartAction', () => { 
    headerUK.invokeCart()
    headerUK.secureCheckout()    
})

Cypress.Commands.add('QuickViewActions', () => { 
    plpPage.quickViewbtn()
    plpPage.quickViewAddToBasketBtn()
})
 
Cypress.Commands.add('HandlePriceSlider', () => { 

    plpPage.maxPriceSlider().should('be.visible').then($el =>{
        expect($el).to.be.visible   
    })
    plpPage.maxPriceSlider() 
    .should('have.attr', 'style', 'left: 100%;')
    .invoke('attr', 'style', 'left: 50%;');
    plpPage.maxPriceSlider().click({force:true})

})
 
Cypress.Commands.add('AddToBasketOnPLP', () => {
    
    plpPage.AddToBasketBtnPLP().first().click({force:true})
    cy.wait(3000) 
    plpPage.productModalOverlay().then($el =>{
        cy.wait(2000)
        if ($el.is(':visible')) {
            plpPage.popUpAddToBasketBtn().first().click({force:true})
            cy.log('Cart Pop Up displayed')
          }
        
        else{
            if(headerUK.cartDropDown().should('have.attr','style','display: none;')){
                cy.log('POP UP NOT DISPLAYED')
            }
        }

    })
    
})
Cypress.Commands.add('MegaMenuCategoryNavigation', () => { 
    //homaPageUK.acceptCookieButton().click()
     headerUK.thirdParentCategory()
     cy.VerifyProductValuesNotZeroOnPLP()
     cy.QuickViewActions()
     headerUK.fifthParentCategory()
     cy.VerifyProductValuesNotZeroOnPLP()
     cy.QuickViewActions()
     headerUK.firstParentCategory()
     cy.VerifyProductValuesNotZeroOnPLP()
     cy.QuickViewActions()
       
})

//Verify filters prices are expedted or not 
Cypress.Commands.add('VerifyPriceFilter', () => { 
    cy.wait(3000)
    plpPage.filteredPrices().each(($el)=>{

        // Extract the text content of each element
      const priceText = $el.text().trim();
        // Remove any currency symbols if necessary
      const priceTextCleaned = priceText.replace('£', ''); // Adjust this if needed
      // Convert the text to a number
      const price = parseFloat(priceTextCleaned);
    
     plpPage.maxFilteredPrice().each(($ab) =>{

        const trimedPrice = $ab.text().trim();
        const replacedPrice = trimedPrice.replace('£', '')
        const maxTrimedPrice = parseFloat(replacedPrice);
     
    
        if (price>maxTrimedPrice){
            expect(price).to.be.lessThan(maxTrimedPrice);
        }
        if (price<maxTrimedPrice){
            expect(price).to.be.lessThan(maxTrimedPrice);
        }
    })
      
    })
})

Cypress.Commands.add('VerifyProductValuesNotZeroOnPLP', () => { 
    cy.wait(3000)
    plpPage.productPrice().each(($el)=>{

        // Extract the text content of each element
      const priceText = $el.text().trim();
        // Remove any currency symbols if necessary
      const priceTextCleaned = priceText.replace('£', ''); // Adjust this if needed

      // Convert the text to a number
      const price = parseFloat(priceTextCleaned);

      // Assert that the price is not zero
      expect(price).to.be.greaterThan(0);
    })
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


        if(CurrentURL.includes('slimcenter')){
            var res=amount.split("€")
            res=res[0].trim().replace(',','.')
        }

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

        if(CurrentURL.includes('slimcenter')){
            var total=amount.split("€")
            total=total[0].trim().replace(',','.')
        }
        
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


Cypress.Commands.add('Extract_All_URLs', (baseUrl) => {   
    cy.get('a').each($el => {
        const href = $el.attr('href');
        if (href) {
            // Handle absolute URLs directly
            if (href.startsWith('http')) {
                cy.readFile(urlsPath).then(data => {
                    if (!data.includes(href)) {
                        data.push(href);
                        totalUrlsExtracted++
                        cy.writeFile(urlsPath, data);
                        
                    }
                });
            } 
            // Handle relative URLs
            else if (href.startsWith('/')) {
                if (baseUrl) {
                    const fullUrl = baseUrl + href;
                    cy.readFile(urlsPath).then(data => {
                        if (!data.includes(fullUrl)) {
                            data.push(fullUrl);
                            totalUrlsExtracted++
                            cy.writeFile(urlsPath, data);
                            
                        }
                    });
                } else {
                    cy.log('Base URL is not set in Cypress command');
                }
            }
        }
    });
})

Cypress.Commands.add('TotalExtractedUrl', () =>{
     cy.readFile(realtotal).then(data =>{
        const updatedData = Array.isArray(data) ? data : [];
        
        // Append the new count
        updatedData.push(totalUrlsExtracted);
        console.log(updatedData)
        cy.writeFile(realtotal, updatedData, { log: false });
        
    })
})

Cypress.Commands.add('SumofTotal_Verified_URL', () =>{
    //    const  TtotalUrlsExtractedReal = totalUrlsExtractedReal+totalUrlsExtracted
    //         console.log("Total Extracted urls" + TtotalUrlsExtractedReal)
    
    cy.readFile(realtotal).then(data =>{
         totalExtractedURLs = Array.isArray(data) ? data.reduce((acc, curr) => acc + curr, 0) : 0;
        cy.wrap(totalExtractedURLs).as('totalSum');
        console.log(totalExtractedURLs)
        
    })
})

Cypress.Commands.add('VerifyResponseCode', (baseUrl) =>{
    const failedUrls = [];
    //const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const failedUrlsPath = `${failedUrlsBasePath}`;


    cy.readFile(urlsPath).then(urls => {
        const requests = urls.map(url =>
          cy.request({
            url: url,
            failOnStatusCode: false
          }).then(response => {
            if (response.status !== 200) {
              //failedUrls.push({ url: url, status: response.status });
              accumulatedFailedUrls.push({ Domain: baseUrl, url: url, status: response.status });
              totalFailedUrls++
              console.log(totalFailedUrls)
            }
          })
        );
        //return Promise.all(requests);
      })
      .then(() => {
        cy.readFile(failedUrlsPath).then(existingFailedUrls => {
                    const updatedFailedUrls = existingFailedUrls.concat(accumulatedFailedUrls);
                    cy.writeFile(failedUrlsPath, updatedFailedUrls);
                  })
      });
})


Cypress.Commands.add('TotalFailedUrl', () =>{
    cy.readFile(realfailed).then(data =>{
        const updatedfailedData = Array.isArray(data) ? data : [];
        
        // Append the new count
        updatedfailedData.push(totalFailedUrls);
        console.log(updatedfailedData)
        cy.writeFile(realfailed, updatedfailedData, { log: false });
        
    })
})

Cypress.Commands.add('SumofTotal_failed_URL', () =>{ 
    cy.readFile(realfailed).then(data =>{
        totalFailedURLs = Array.isArray(data) ? data.reduce((acc, curr) => acc + curr, 0) : 0;
        cy.wrap(totalFailedURLs).as('totalSum');
        console.log(totalFailedURLs)
        
    })
})

Cypress.Commands.add('SendEmail', () =>{
    const activeLinks = totalExtractedURLs - totalFailedURLs;
    const emailBody = `
        <html>
        <body style="font-family: Verdana;">
            <p>Hi User,</p>
            <p>We have completed our latest site health check using QA automation. Here are the results:</p>
            <ul>
                <li><b>Total Links Checked:</b> ${totalExtractedURLs}</li>
                <li><b>Active Links:</b> ${activeLinks}</li>
                <li><b>Links with Errors:</b> ${totalFailedURLs}</li>
            </ul>
            <p>Please review the information and let me know if you have any questions.</p>
            <p>Best regards,<br>QA Team</p>
        </body>
        </html>
    `;

    cy.task('sendMail', { 
        subject: 'Site Health Check Report', 
        html: emailBody // Use `html` property for HTML content
    }).then(result => console.log(result));  
})


Cypress.Commands.add('VisitEachCategory', () => {    
    categoryUrls.forEach((url) => {
        if (url.includes('https')) {
        cy.request({
          url: url,
          failOnStatusCode: false
        }).then((response) => {
          // Check if response contains HTML content
          const contentType = response.headers['content-type'];
          
            // Response contains HTML, execute the test
            cy.visit(url, { failOnStatusCode: false });
            if (response.status !== 200) {
              cy.log(`Request failed for URL: ${url} with status ${response.status}`);
              //cy.screenshot(snapshot)
              //cy.clock()
              
          }
          expect(response.status).to.eq(200);
          } 
          
      )}
        else {
            // Response does not contain HTML, print 'void'
            
            cy.log('Not an Valid Url',url);
          }
        });
})

Cypress.Commands.add('Resetfiles', () => {
    cy.writeFile(failedUrlsBasePath, []);
    cy.writeFile(realtotal, []);
    cy.writeFile(realfailed, []);
});
  
  
Cypress.Commands.add('CartPageActions', () =>{ 
    //cartPage.deleteButton().should('be.visible')
    cy.wait(3000)
    cartPage.deleteButton().then($el =>{
        cy.log("Delete buttons working fine")
    })
    cy.wait(5000)
    cartPage.increaseQTY().click()
    cy.wait(5000)
    cartPage.decreaseQTY()

})



Cypress.Commands.add('FiltersVerification', () => {
    headerUK.burgerMenuLink().each($el => {
        const href = $el.attr('href');
        //cy.log(`Filter block title is visible on page: ${href}`);
        if (href && href.includes('http')) {
            cy.visit(href).then(() => {
                cy.get('body').then($body => {
                    const filterWrap = $body.find('#catMixitup .filter-wrap');
                    
                    // Check if style is present and visible
                    if (filterWrap.length && filterWrap.attr('style')?.includes('display: block;')) {
                        // If the style attribute is present and includes 'display: block;', check for the visibility of another element
                        cy.get('#leftFilter .filter-blockTitle').then($filterTitle => {
                            if ($filterTitle.is(':visible')) {
                                // If #leftFilter .filter-blockTitle is visible, execute this block
                                cy.log(`Filter block title is visible on page: ${href}`);
                                // Add any additional commands you want to run
                            } else {
                                // If #leftFilter .filter-blockTitle is not visible
                                cy.log(`Filter block title is not visible on page: ${href}`);
                            }
                        });
                    } else {
                        // If the style attribute is not present or does not include 'display: block;', execute this block
                        cy.log(`Element with class "filters" is present on: ${href}`);
                        cy.HandlePriceSlider();
                        cy.VerifyPriceFilter();
                    }
                });
            });
        }
    });
    
  });
  



