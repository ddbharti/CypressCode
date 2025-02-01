describe('Fetch Data into test case',()=>{

    /*it('Approach 1 - Login',()=>{
        
        cy.fixture('example1.json').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]').type(data.username)
            cy.get('[type="password"]').type(data.password)
            cy.get('[type="submit"]').click()
        })

    })*/

    //Access through Hook - for multiple it blocks
    let userdata;
    before( ()=>{
        cy.fixture('OrangeHRM1.json').then((data)=>{
            userdata=data;
    })
    })


    it('Hooks Access',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(userdata.username)
        cy.get('[type="password"]').type(userdata.password)
        cy.get('[type="submit"]').click()
    })
    

    })
