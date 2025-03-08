describe('suite name',()=>{
    it('TC1',()=>{
        cy.visit('')
        cy.title().should('eq','eq')
        cy.title().then((pageTitle)=>{
            cy.log('pageTile is :'+ pageTitle);
        })

    })

})