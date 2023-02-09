
class Signin
{
    setusername()
    {
       return cy.get('#EmailAddress');
    }

    setuserpassword()
    {
     return cy.get('[name="Password"]');
    }

    signinto()
    {
     return cy.get('#login_submit');
    }

    verifytest()
    {
     return cy.get('.h1');
   //.should('be.visible',"Welcome to Snapfish!");
    }

    
    }


export default signin;
