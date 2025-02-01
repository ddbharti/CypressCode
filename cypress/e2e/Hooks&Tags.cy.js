describe('Hooks suite',()=>{


    before('',()=>{
        cy.log('*********LAUNCH APP****************')
    })

    after('',()=>{
        cy.log('********CLOSE APP****************')   

    })

    beforeEach('',()=>{
        cy.log('*********LAUNCH APP for ALL****************')
    })

    afterEach('',()=>{
        cy.log('********CLOSE APP for all****************')   

    })

    it('Search',()=>{
        cy.log('************* SEARCH **************')

    })

    it('Advanced Search',()=>{
        cy.log('************* ADVANCED SEARCH **************')
        
    })

    it('Listing Products',()=>{
        cy.log('************* LISTING PRODUCTS **************')
        
    })
})