/// <reference types="Cypress"/>
import signin from "../pageobjects/Loginpage2.js"

describe('verifylogin',function(){


   before('launch', ()=>{
    cy.LaunchApplication();


    
    })


   it('verifylogin',()=>{

      cy.fixture("data.json").then(function(logindata){
         this.logindata=logindata

       const login=new signin();
    
      login.setusername(this.logindata.username)
      login.setuserpassword(this.logindata.password)
      login.signinto().click()
   })
    

    }) 

})
