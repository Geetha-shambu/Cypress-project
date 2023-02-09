/// <reference types = "cypress"/>

describe('Visit Kitchen sync page', () => {
    it('Visit guru website', () => {
      cy.visit('https://demo.guru99.com/test/newtours/index.php')
       cy.get('input[name="userName"]').type('siddu')
      cy.get('input[name="password"]').type('Siddu@123')
      cy.contains('Submit').click()
     })
  
    
  })