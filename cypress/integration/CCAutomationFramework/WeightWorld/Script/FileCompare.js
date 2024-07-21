describe('Compare Files and Write Differences', () => {
    const file1 = 'cypress/fixtures/Test1.json';
    const file2 = 'cypress/fixtures/Test2.json';
    const diffFile = 'cypress/fixtures/Diff.json';
  
    it('should compare two files and write the differences to a third file', () => {
      cy.compareFilesAndWriteDifference(file1, file2, diffFile);
    });
  });
  