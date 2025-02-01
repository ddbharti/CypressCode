describe('Radio And Checkbox suite',()=>{

    it('Radio Button case 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        //Visibility of radio button
        cy.get('#male').should('be.visible')

        //Select the male Radio Button and verifying female radio button is unchecked
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        
    })

    it('Check box test case',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        //verifying the element
        cy.get('#sunday').should('be.visible')

        //Selecting single checkbox
        cy.get('#sunday').check().should('be.visible')

        //UnSelecting checkbox
        cy.get('#sunday').uncheck().should('not.be.checked')

        //Select all checkbox
        cy.get('.form-check-input[type="checkbox"]').should('be.visible')
        //cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')

        //Select first and last checkbox
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.visible')
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.visible')
        
    })
})