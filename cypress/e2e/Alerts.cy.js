describe('Alerts Suite',()=>{

    it('1.Simple Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        //Switch to alert
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('2. Confirmation Alert - Ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        //Switch to alert

        cy.on('window:confirm',(c)=>{
            expect(c).to.contain('I am a JS Confirm')
        })
        //Assert for confirmation
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('3. Confiration Alert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(c)=>{
            expect(c).to.contain('I am a JS Confirm')
        })
        //To click on cancel on alert
        cy.on('window:confirm',()=>false)

        //Verifying result for cancel
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it('4. Prompt Alert - OK',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //Takes control on alert and enter the text first
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: welcome')
    })

    it.only('5. Prompt alert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.on('window:prompt',()=>false)
        
       
        cy.get('#result').should('have.text','You entered: null')

    })
})