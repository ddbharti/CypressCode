describe('Verify Title suite',()=>{

    it('Test Case 1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.log('Title is verified')

    })

    it('Test Case 2',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //To get the title:

        cy.title().then((title) => {
            cy.log(title)
         })
        cy.title().should('eq','OrangeHRM')
        cy.log('Title is verified')

    })

    it.only('Test Case 3: pageSource',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //To get the title:

        cy.title().then((title) => {
            cy.log(title)
         })

         cy.window().then((window) => {
                const pageSource = window.document.documentElement.outerHTML;
                  cy.log(pageSource); // Log the page source to the Cypress command log
                 });
        cy.title().should('eq','OrangeHRM')
        cy.log('Title is verified')

    })



})