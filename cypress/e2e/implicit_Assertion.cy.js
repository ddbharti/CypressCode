describe('Implicit Assertion Suite',()=>{

    it('Test case 1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //include
        cy.url().should('include','demo.orangehrmlive.com/web')  
        //equal
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
        //contain
        cy.url().should('contain','ensource-')

    })

    it('Test case 2- Optimize code',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','rangehrmlive.com/').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','sour')

    })

    it('Test case 3- should and',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','rangehrmlive.com/').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','sour')

    })

    it('Test case 4- Negative Assertion',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('not.include','rangehrmlive.com/').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','sour')

    })

    it('Test case 5- Verify Title',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include','Orange').and('eq','OrangeHRM').and('contain','HRM')

    })

    //be.visible to verify logo is visible or not
    it('Test case 6 - Verify the Logo',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        
    })

     //exist to verify logo is visible or not
     it('Test case 7 - Verify the Logo with exist',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-logo').should('exist')
        
    })

     //exist to verify logo is visible or not
     it('Test case 8 - Verify the Logo with exist',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')
        
        
    })
})