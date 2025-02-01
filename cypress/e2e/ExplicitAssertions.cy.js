describe('Explicit Assertion Suite',()=>{

    //expect  -BDD Approch
    //assert  -TDD Approch

    it('Test case 1',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        let expName='manda user'  //Expected Name of user is stored into expName

        //Actual value is stored in variable 'x'
        cy.get('[class="oxd-userdropdown-name"]').then((x)=>{  //storing the user name into variable 'x'
            let actualName=x.text()  //getting text from variable

            //BDD Approch
            expect(actualName).to.equal(expName)      // Positive Approch
            expect(actualName).to.not.equal(expName)  // Negative Approch

            //TDD Approch
            assert.equal(actualName,expName)         // Positive Approch
            assert.notEqual(actualName,expName)      // Negative Approch
            
        })
        
    })

})