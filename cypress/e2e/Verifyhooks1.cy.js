/// <reference types="Cypress"/>
import Login from "../pageobjects/testlogin";
import create from "../pageobjects/mugs";
describe('verify selecting product',function(){

  before(function(){
  cy.LaunchApplicatio();})

 beforeEach('signin', ()=>{
  // it('Login1',()=>{
    
    // cy.fixture("data.json").then((logindata)=>{ 
        //this.logindata=logindata
       const ln=new Login();
      ln.setuser();
      ln.setpassword();
      ln.signin();
      ln.verifytest();

   })

  it('login2',()=>{
       const ln =new create();
       ln.entermugs();
       ln.mugspage();
       ln.firstmug();
       ln.selectfirstmug();



  })



})