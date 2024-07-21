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


const urlsPath = "cypress/fixtures/ExtractedURL's.json";
const failedUrlsBasePath = 'cypress/fixtures/failed_urls.json';




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
Cypress.Commands.add('EmailSender',() => {
    // const nodemailer = require('nodemailer');
    // const fs = require('fs');
    // const path = require('path');
    
    // // Email configuration
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // e.g., use 'gmail' or your preferred email service
    //   host:"smtp.gmail.com",
    //   auth: {
    //     user: 'shreeniwas.ukhale@comfortclick.co.uk',
    //     pass: 'djhmf@#$820XL'
    //   }
    // });
    
    // // Get the most recent failed URLs file
    // const directoryPath = path.join(failed_urls, 'cypress/fixtures');
    // let recentFile;
    
    // fs.readdir(directoryPath, (err, files) => {
    //   if (err) {
    //     console.error('Unable to scan directory: ' + err);
    //     process.exit(1);
    //   }
    
    //   const failedFiles = files.filter(file => file.startsWith('failed_urls_'));
    //   recentFile = failedFiles.sort((a, b) => {
    //     return fs.statSync(path.join(directoryPath, b)).mtime.getTime() -
    //            fs.statSync(path.join(directoryPath, a)).mtime.getTime();
    //   })[0];
    
    //   if (recentFile) {
    //     // Send the email with the recent failed URLs file as an attachment
    //     const mailOptions = {
    //       from: 'shreeniwas.ukhale@comfortclick.co.uk',
    //       to: 'shreenivasukhale@gmail.com',
    //       subject: 'Cypress Test - Failed URLs',
    //       text: 'Please find the attached file containing the failed URLs.',
    //       attachments: [
    //         {
    //           filename: recentFile,
    //           path: path.join(directoryPath, recentFile)
    //         }
    //       ]
    //     };
    
    //     transporter.sendMail(mailOptions, (error, info) => {
    //       if (error) {
    //         console.error(error);
    //         process.exit(1);
    //       }
    //       console.log('Email sent: ' + info.response);
    //       process.exit(0);
    //     });
    //   } else {
    //     console.log('No failed URLs file found.');
    //     process.exit(0);
    //   }
    // });

//     const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "shreeniwas.ukhale@comfortclick.co.uk",
//     pass: "djhmf@#$820XL",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"Shreenivas" <shreeniwas.ukhale@comfortclick.co.uk>', // sender address
//       to: "shreenivasukhale@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//   }
  
//   main().catch(console.error);


})



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
    plpPage.priceSlider()
    .should('have.attr', 'style', 'left: 100%;')
    .invoke('attr', 'style', 'left: 50%;');
    plpPage.priceSlider().click({force:true})
})
 
Cypress.Commands.add('AddToBasketOnPLP', () => {
    
    plpPage.AddToBasketBtnPLP().first().click({force:true})
    cy.wait(3000) 
    plpPage.productModalOverlay().then($el =>{
        cy.wait(2000)
        if ($el.is(':visible')) {
            plpPage.popUpAddToBasketBtn().first().click({force:true})
          }
        
        else{
            if(headerUK.cartDropDown().should('have.attr','style','display: block;')){
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
    // cy.get('.header-bottom [href]').each(($el) => {
    //     const url = $el.prop('href');
    //     categoryUrls.push(url);
    //   });
    //   //console.log(categoryUrls)
    cy.get('a').each($el => {
        const href = $el.attr('href');
        if (href) {
            // Handle absolute URLs directly
            if (href.startsWith('http')) {
                cy.readFile(urlsPath).then(data => {
                    if (!data.includes(href)) {
                        data.push(href);
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



Cypress.Commands.add('VerifyResponseCode', () =>{

    const failedUrls = [];
    //const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const failedUrlsPath = `${failedUrlsBasePath}`;


    cy.readFile(urlsPath).then(urls => {
        urls.forEach(url => {
          cy.request({
            url: url,
            failOnStatusCode: false
          }).then(response => {
            if (response.status !== 200) {
              //failedUrls.push({ url: url, status: response.status });
              accumulatedFailedUrls.push({ url: url, status: response.status });
            }
          });
        });
      })
      .then(() => {
        // Write the failed URLs to a file if there are any failures
        //cy.writeFile(failedUrlsPath, failedUrls);
        cy.readFile(failedUrlsPath).then(existingFailedUrls => {
                    const updatedFailedUrls = existingFailedUrls.concat(accumulatedFailedUrls);
                    cy.writeFile(failedUrlsPath, updatedFailedUrls);
                  })


      });
})

Cypress.Commands.add('SendEmail', () =>{
    cy.task('sendMail', { 
        subject: 'Cypress Test - Failed URLs', 
        text: 'Please find the attached file containing the failed URLs.'
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



  
Cypress.Commands.add('compareFilesAndWriteDifference', (file1, file2, diffFile) => {
    cy.readFile(file1).then(array1 => {
      cy.readFile(file2).then(array2 => {
        // Find elements in array1 that are not in array2
        const diff1 = array1.filter(x => !array2.includes(x));
        // Find elements in array2 that are not in array1
        const diff2 = array2.filter(x => !array1.includes(x));
  
        // Combine the differences
        const differences = [...diff1, ...diff2];
  
        // Write differences to a new file
        cy.writeFile(diffFile, differences);
      });
    });
  });
  
  









  
  