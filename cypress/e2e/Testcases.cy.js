//Base//

import Login from "../pageobjects/Loginpage.js"
describe('Testcases',()=>{ 
//Page//

//before
   /*it('step by test cases',()=>{
     console.log('launch application')
     cy.visit('https://www.snapfish.com/loginto?next=https%3A%2F%2Fwww.snapfish.com%2Fhome')
     cy.wait(4000)
    //})
    //it('login flow',()=>{
    //  cy.wait(2000)
     console.log('Login flow')
     cy.get('#EmailAddress').type('snappstar22+022@gmail.com')
     cy.get('[name="Password"]').type('Geetha@22')
     cy.get('#login_submit').click()
     cy.wait(4000)
    }) 
     beforeEach
     cy.visit("https://www.snapfish.com/home?loginwith=email")
    it('image',()=>{
      cy.get('.gdb-g-v1 > .gdb-s').click()
     
    })*/

  // before
   cy.visit('https://www.snapfish.com/loginto?next=https%3A%2F%2Fwww.snapfish.com%2Fhome')

    it('Loginpage',()=>{
      console.log('launch application')
      cy.visit('https://www.snapfish.com/loginto?next=https%3A%2F%2Fwww.snapfish.com%2Fhome')
      const ln=new Login();
      ln.setuser("snappstar22+022@gmail.com")
      ln.setpassword('Geetha@22')
      ln.signin();
      ln.signinupload();
      ln.verifytest;
      cy.wait(4050)
      ln.deviceupload();
    })

    it.this('search for product',()=>{
      ln.serach();
    })

    //it('try to upload',()=>{
      //cy.visit('https://www.snapfish.com/home')
      //ln.clickonupload();
    //})
})