/// <reference types="cypress" />

const urlsPath = 'cypress/fixtures/URLs.json';
const failedUrlsBasePath = 'cypress/fixtures/failed_urls.json';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

describe('Collect and Verify URLs', () => {
  before(() => {
    // Ensure the URLs file is initialized as an empty array
    cy.writeFile(urlsPath, []);
    cy.writeFile(failedUrlsBasePath, []);
  });

  it('Collect all URLs on the website', () => {
    cy.visit('https://www.animigo.fr'); // Change to your website URL

    // Collect all URLs on the page
    cy.get('a').each($el => {
      const href = $el.attr('href');
      if (href && href.startsWith('http')) {
        cy.readFile(urlsPath).then(data => {
          if (!data.includes(href)) {
            data.push(href);
            cy.writeFile(urlsPath, data);
          }
        });
      }
    });
  });


  it('Verify URLs return 200 status code and save failed URLs', () => {
    const failedUrls = [];
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const failedUrlsPath = `${failedUrlsBasePath}${timestamp}.json`;

    cy.readFile(urlsPath).then(urls => {
      urls.forEach(url => {
        cy.request({
          url: url,
          failOnStatusCode: false
        }).then(response => {
          if (response.status !== 200) {
            failedUrls.push({ url: url, status: response.status });
          }
          //expect(response.status).to.eq(200);
        });
      });
    }).then(() => {
      // Write the failed URLs to a file if there are any failures
      if (failedUrls.length > 0) {
        cy.writeFile(failedUrlsPath, failedUrls).then(() => {
          // Execute the script to send an email
          //cy.exec('sendemail.js');
          cy.EmailSender()
        });

    }})

//   it('Verify URLs return 200 status code and save failed URLs', () => {
//     cy.readFile(urlsPath).then(urls => {
//       urls.forEach(url => {
        
        
//         cy.request({
//           url: url,
//           failOnStatusCode: false
//         })
//         .then(response => {
//           if (response.status !== 200) {
//             cy.readFile(failedUrlsPath).then(failedData => {
//               failedData.push({ url: url, status: response.status });
//               cy.writeFile(failedUrlsPath, failedData);
//               cy.log('Failed URL: ${url}')
//             });
//           }
//           //expect(response.status).to.eq(200, `Failed URL: ${url}`);
        
//         });
//       });
//     }).then(() =>{
//         if (failedUrls.length > 0) {
//             cy.writeFile(failedUrlsPath, failedUrls).then(() => {
//               // Execute the script to send an email
//               cy.exec('node send-email.js');
//             })
//         }
//     })
  });
});
