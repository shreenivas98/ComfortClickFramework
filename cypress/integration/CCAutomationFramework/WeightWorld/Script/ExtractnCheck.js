/// <reference types="cypress" />

const urlsPath = 'cypress/fixtures/newurl.json';
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
    // cy.get('a').each($el => {
    //   const href = $el.attr('href');
    //   if (href && href.startsWith('http')) {
    //     cy.readFile(urlsPath).then(data => {
    //       if (!data.includes(href)) {
    //         data.push(href);
    //         cy.writeFile(urlsPath, data);
    //       }
    //     });
    //   }
    // });
  });

  it('Verify URLs return 200 status code and save failed URLs', () => {
    // const failedUrls = [];
    // const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    // const failedUrlsPath = `${failedUrlsBasePath}`;

    // cy.readFile(urlsPath).then(urls => {
    //   urls.forEach(url => {
    //     cy.request({
    //       url: url,
    //       failOnStatusCode: false
    //     }).then(response => {
    //       if (response.status !== 200) {
    //         failedUrls.push({ url: url, status: response.status });
    //       }
    //     });
    //   });
    // }).then(() => {
    //   // Write the failed URLs to a file if there are any failures
    //   cy.writeFile(failedUrlsPath, failedUrls);
    // });
  });

  after(() => {
    // cy.task('sendMail', { 
    //   subject: 'Cypress Test - Failed URLs', 
    //   text: 'Please find the attached file containing the failed URLs.'
    // }).then(result => console.log(result));
  });
});
