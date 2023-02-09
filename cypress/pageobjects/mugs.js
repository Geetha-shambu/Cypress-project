class create

{

    searchfor=('#aa-search-input-mob')
    mugs=('#aa-input-mob > .search-icon')
    page=('[class="right-section"]')
    select1=('[alt="Shop All Mugs + Drinkware  "]')
    photomug=('.link-wrap')



    entermugs( )
    {
   cy.get(this.searchfor).type('Mugs');
     //return cy.get('#aa-search-input-mob')

    }

    select( )
    {
    cy.get(this.mugs).click();
   // return cy.get('#aa-input-mob > .search-icon').click();
    }

    mugspage( )
    {
       cy.get(this.page).should('have.length',1);
      // return cy.get('[class="right-section"]').should('have.length',1);
    }

    firstmug( )
    {
        //cy.get(this.select1).click();
        return cy.get('[alt="Shop All Mugs + Drinkware  "]').click();
    }

    selectfirstmug( )
    {
       cy.get(this.photomug).should('be.visible','PhotoMugs+Drinkware');
       //return cy.get('.link-wrap').should('be.visible','PhotoMugs+Drinkware');
    }



}
export default create;



