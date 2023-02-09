
describe('My First Test', () => {
    it('first test', () => {

        cy.visit("https://www.snapfish.com/home")

       // cy.title().should('eq', "Snapfish")
       //cy.get('[alt="65% off Photo Books"]').click()
       //cy.get('[alt="8x8 Square Books"]').click()
       //cy.get('[alt="Studio Design Tile"]').click()
       cy.get('#aa-search-input-mob').type('calendars')
       cy.get('#aa-input-mob > .search-icon').click()
       cy.get('.right-section :visible').should('have.length',338)
       cy.get('#design-name-link-0').click()
       cy.get('#buttonId').click()
       cy.get('#EmailAddress').type('snappstar22@gmail.com')
       cy.get('[name="Password"]').type('Geetha@22')
       cy.get('[onclick="submitAction()"]').click()
       //cy.get('error UserStatus');cy.contains('Invalid login credentials. Please try login with valid email/password.')
      cy.get('.medium-10 > .gdb-p').click()
       cy.get('[name="email"]').type('snappstar22+022@gmail.com')
       cy.get('#password').type('Geetha@22')
       cy.get('[name="firstname"]').type('Geetha')
       cy.get('[name="lastname"]').type('smba')
       cy.get('.forms > .text-center > .gdb-p').click()
       cy.get('.show-for-medium-up > .gdb-p').click()
       cy.get('[name="EmailAddress"]').type('snappstar22+022@gmail.com')
       cy.get('[type="password"]').type('Geetha@22')
       cy.get('[name="log in"]').click()
       cy.wait(2000)
       cy.get('#guest-anchor-uploadphotssec').click()
       cy.get('.holder-mycomputer').click()

       


    })
  })