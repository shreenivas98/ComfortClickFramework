describe('Page Load Time Test', () => {
    let Domain = [];
  
    const excelHeader = [['Timestamp', 'URL', 'Page Load Time (seconds)']];
  
    // Load URLs from the JSON file before running tests
    
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Returning false here prevents Cypress from failing the test
      return false;
    });
  
    
    before(() => {
      cy.readFile('cypress/fixtures/Domain_URLs.json').then((data) => {
        Domain = data.Domain;
      });
    });
    it('Check page load times', () => { 
      if (!Domain.length) {
        throw new Error('No URLs found in carls urls.json');
      }
  
      // Clear the existing Excel file before logging new results (keep only headers)
      
      
        
        const timestamp = new Date().toLocaleString();
  
        // Loop through each URL and process sequentially
        Domain.forEach((url) => {
          cy.wrap(null).then(() => {
            // Start timer for individual URL
            const startTime = new Date().getTime();
  
            // Visit the URL and calculate page load time
            //cy.visit(url).then(() => {
              cy.visit(url, { timeout: 50000 }).then(() => {  
              const endTime = new Date().getTime();
              const pageLoadTime = (endTime - startTime) / 1000; // Convert to seconds
  
              // Log individual page load time for debugging
              cy.log(`Page load time for ${url}: ${pageLoadTime} seconds`);
  
              // Prepare row data for Excel sheet
              const rowData = [timestamp, url, pageLoadTime];
  
              // Push row data to Excel sheet
              excelHeader.push(rowData);
             
            
          });
        });
  
        // Write the new results to the Excel file after all URLs are processed
        cy.then(() => {
          cy.task('writeExcelFile', { filePath: 'cypress/fixtures/page_load_times.xlsx', jsonSheet: excelHeader }).then(() => {
            // cy.task('colorExcelRows', { filePath: 'cypress/reports/page_load_times.xlsx', threshold: 5 });
          });
        });
      });
    });
  
    after(() => {
      cy.SendPerformEmail();
    });
  });
  