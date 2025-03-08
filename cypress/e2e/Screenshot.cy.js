describe('Screenshot',()=>{

    it('screenshots',()=>{
        cy.visit('www.google.com')
        cy.screenshot({ capture: 'viewport' })
    })
})