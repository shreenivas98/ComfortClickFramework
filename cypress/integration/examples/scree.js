// cypress/e2e/users.cy.js

const screennot = 'cypress/screenshots'

describe('my tests', () => {
    it('takes a screenshot', () => {
      // screenshot will be saved as
      // cypress/screenshots/users.cy.js/my tests -- takes a screenshot.png
      cy.screenshot(screennot)
    })
  })