 /// <reference types="Cypress"/>
import Login from "../pageobjects/testlogin.js"
describe('hookconcept',function(){

  before(function(){
  cy.LaunchApplicatio();})
    
//beforeEach('signin', ()=>{
   // cy.application();


   it('Login1',()=>{
    
   // cy.fixture("data.json").then((logindata)=>{ 
       //this.logindata=logindata
      const ln=new Login();
     ln.setuser()
     ln.setpassword();
     ln.signin();
     ln.verifytest();
    }) 

  //  // it('login2',()=>{
  //      const ln =new create();
  //      ln.entermugs( );
  //      ln.select( );
  //      ln.mugspage( );
  //      ln.firstmug( );
  //      ln.selectfirstmug( );
      

    // //it('product1',()=>{
    //     cy.visit('https://www.snapfish.com/photo-mugs?algSearch=mugs&fromSrc=serp');
    //     const ln =new mugspdp();

    //     ln.selectblack();
    //     ln.blackmug();
    //     ln.checkbox();
    })
  



