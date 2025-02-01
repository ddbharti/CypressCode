describe('Dropdown suite',()=>{

    it.skip('1. Normal Dropdown by Select',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        //css for dropdown
        cy.get('#zcf_address_country').select('Australia').should('have.value','Australia')

    })

    it.skip('Boot strap Dropdown without select',()=>{
       cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

       cy.get('#select2-billing_country-container').click()
       cy.get('.select2-search__field').type('Japan').type('{enter}')
       cy.get('#select2-billing_country-container').should('have.text','Japan')
    })

    it.skip('Auto suggestion Dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')

        cy.get('[name="search"]').type('Sachin')
        cy.get('.suggestion-text').contains('Sachin Tendulkar').click()
    })

    it.only('Dynamic dropdown',()=>{

        cy.visit('https://www.google.com/')
        cy.get('[class="gLFyf"]').type('Harshad')

        cy.wait(3000)

        cy.get('.wM6W7d>span').should('have.length',13)

        cy.get('.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='Harshad Chopda')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('[class="gLFyf"]').should('have.value','harshad chopda')

    })
})