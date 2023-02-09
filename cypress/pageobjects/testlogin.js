
class Login
{

    txtusername='#EmailAddress'
    txtpassword='[name="Password"]'
    gsignin='#login_submit'

    upload='#photoOrg-addPhotos-wp-aggr-btn'
    text= ('.h1')
    //search for product //
    searchfor=('#aa-search-input-mob')
    mugs=('#aa-input-mob > .search-icon')
    page=('[class="right-section"]')
  
    
    setuser()
    {
        cy.get(this.txtusername).type('snappstar22+022@gmail.com')
    }

    setpassword()
    {
     cy.get(this.txtpassword).type('Geetha@22')
    }

    signin()
    {
     cy.get(this.gsignin).click();
    }

   signinupload(upload)
   {
   cy.get(this.upload).click();
   }

    verifytest()
    {
   cy.get(this.text).should('be.visible',"Welcome to Snapfish!");
    }

    deviceupload(upload1)
    {
    cy.get(this.mycomputer).click();
    }



}
export default Login;