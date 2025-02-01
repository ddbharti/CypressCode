describe('List suite',()=>{

    it('Links and Implicit assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Returns all the links present on webpage
        cy.xpath('//a')

        //applying assertion to check number of links
        cy.xpath('//a').should('have.length','5')

        //checks the value entered in textbox
        cy.get('[name="username"]').type('Admin').should('have.value','Admin')
    })
})