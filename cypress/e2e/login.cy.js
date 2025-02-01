describe('cypress suite',()=>{

    it('test case 1',()=>{

        cy.log('Test case start')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq','OrangeHRM')  //verifying title

        cy.get('[name="username"]').type('Admin') //Enter User name

        cy.get('[name="password"]').type('admin123')  // Enter password

        cy.get('[type="submit"]').click()  // Click on login button

        cy.log('Test case finished')
    })

    it('Test Case 2',()=>{

        cy.visit("https://practice.automationtesting.in/my-account/")
        cy.get("#username").type('Admin')
        cy.get('#password').type('Password')
        cy.get('[name="login"]').click()
    })
})