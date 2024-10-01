describe('Page Load Time Test with Performance API', () => {
    let DomainURL = [];
    let pageLoadTimes = []; // Array to store page load times data
    
    // Load URLs from the JSON file before running tests
    before(() => {
      cy.readFile('cypress/fixtures/Domain_URLs.json').then((data) => {
        DomainURL = data.DomainURL;
      });
    });
  
    it('Check page load times using Performance API', () => {
      if (!DomainURL.length) {
        throw new Error('No URLs found in carls urls.json');
      }
  
      // Loop through each URL and process sequentially
      cy.wrap(DomainURL).each((url) => {
        cy.visit(url);
        cy.window().then((win) => {
          const performance = win.performance;
          const timing = performance.timing;
          
          // Calculate load time using Performance API
          const pageLoadTime = (timing.loadEventEnd - timing.navigationStart) / 100; // Convert to seconds
          
          // Store the data in an array
          pageLoadTimes.push([new Date().toLocaleString(), url, pageLoadTime]);
  
          cy.log(`Page load time for ${url}: ${pageLoadTime} seconds`);
        });
      }).then(() => {
        // Write the collected data to an Excel file
        cy.task('writeExcelFile', {
          filePath: 'cypress/fixtures/page_load_times.xlsx',
          jsonSheet: [['Timestamp', 'URL', 'Page Load Time (seconds)'], ...pageLoadTimes]
        });
      });
    });
  });
  