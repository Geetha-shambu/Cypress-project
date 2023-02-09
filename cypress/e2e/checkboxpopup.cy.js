/// <reference types="Cypress"/>
describe('My First Test', () => {
    it('first test', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption2").check()
        cy.get("#checkBoxOption2").uncheck()
        //cy.get('input#autocomplete').type("India")
        //cy.get("ui-id-1").should('have.lenght',5)
       // cy.get('[tabindex="-1"]').select('Unites states(USA)')
       cy.get('[placeholder="Type to Select Countries"]').click()
       cy.get('[value="radio3"]').click()
      // cy.get('input[type="checkbox"]').check('option1,option3')
       cy.get('[name="enter-name"]').click().type('AMB')
       cy.get('select').select('option2').should('have.value','option2')
       cy.get('#autocomplete').type('United')
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       


    })
})
