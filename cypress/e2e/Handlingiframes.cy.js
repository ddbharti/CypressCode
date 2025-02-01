describe('Handling iframes',()=>{

    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/frames')
        cy.get('[href="/iframe"]').click()

        const iframe= cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type('Welcome')

    })

    //By creating custom commands
    it('Approach 2 - By creating custom commands',()=>{
        cy.visit('https://the-internet.herokuapp.com/frames')
        cy.get('[href="/iframe"]').click()
        cy.getIFrame('#mce_0_ifr')

    })

    //irame plugin
    it.only('Approach 3- irame plugin',()=>{

        cy.visit('https://the-internet.herokuapp.com/frames')
        cy.get('[href="/iframe"]').click()
        cy.frameLoaded('#mce_0_ifr')  //Load the frame
        cy.iframe('#mce_0_ifr')
    })
})