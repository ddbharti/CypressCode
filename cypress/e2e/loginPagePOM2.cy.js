import Login from "../pageObjectModel/LoginPage2.js"

describe('Login Page POM suite',()=>{


    // Using POM with Fixture File
    it('Login Test case 1',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('OrangeHRM1').then((data)=>{
            
            const ln=new Login;

            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickLogin()
            ln.verifySignIn()

        })
        
    })

    // Using POM 
    it.only('Test case 2',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln=new Login;
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickLogin()
        ln.verifySignIn()

    })
})