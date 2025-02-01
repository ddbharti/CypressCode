describe('Xpath use suite',()=>{

    it('Test case 1',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@type="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
    })
})