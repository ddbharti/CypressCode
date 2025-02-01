describe('Data Driven Test suite',()=>{

    it('DataDrivenTest',()=>{

        cy.fixture('orangeHRM2').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(5000)

            data.forEach((userdata) => {
                cy.wait(5000)
                cy.get('[name="username"]').type(userdata.username)
                cy.get('[type="password"]').type(userdata.password)
                cy.get('[type="submit"]').click()

                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.wait(5000)
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
                
            });
        })
    })

})




