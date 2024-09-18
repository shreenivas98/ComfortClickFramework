// cypress/integration/pageLoadTime.spec.js
const xlsx = require('xlsx');
const fs = require('fs');

describe('Measure Page Load Time', () => {
  it('Logs page load time and stores it in an Excel file', () => {
    // Start time before page load
    const start = new Date().getTime();

    // Visit the page
    cy.visit('https://www.weightworld.uk/') // Replace with the URL you want to test

    // End time after page load
    cy.window().then(() => {
      const end = new Date().getTime();
      const loadTime = end - start;

      // Log the load time in the test console
      cy.log(`Page Load Time: ${loadTime} ms`);

      // Create the data to be written to Excel
      const data = [
        ['URL', 'Load Time (ms)'],
        ['https://www.weightworld.uk/', loadTime] // Replace with actual URL or variable
      ];

      // Convert the data into a worksheet
      const ws = xlsx.utils.aoa_to_sheet(data);

      // Create a new workbook and append the worksheet
      const wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, ws, 'Page Load Time');

      // Write the Excel file
      const filePath = './cypress/reports/page_load_time.xlsx';
      xlsx.writeFile(wb, filePath);

      // Verify that the file has been created
      cy.task('log', `File created at: ${filePath}`);
    });
  });
});
