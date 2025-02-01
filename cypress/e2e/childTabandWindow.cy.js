// By default we cannot handle the child tab or Window, we need to handle it in different way
// Approach 1: We can remove the 'target' attribute from DOM structure 
describe('Handling Child Tab and Window suite',()=>{

    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        

        //Remove Target attribute from DOM and use invoke method
        cy.get('[href="/windows/new"]').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(4000)

        cy.go('back') // go back to parent tab
    })

    it.only('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('[href="/windows/new"]').then((e)=>{

            let url=e.prop('href')
            cy.visit(url)
        })
        cy.origin('https://the-internet.herokuapp.com/windows/new')

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(4000)

        cy.go('back') // go back to parent tab
    })

    it.skip('Approach 3',()=>{
        cy.visit('https://elementalselenium.com/')
        cy.get("a[href='http://elementalselenium.com/']") //locator of the element which will open url in new tab
        .should('be.visible')
        .invoke('removeAttr', 'target') //removing target attribute to prevent the link opening in new tab
        .then(($link) => {
        const url = $link.prop('href');
        cy.visit(url);
    })  // then visiting that link in the same page
        //To work on this new link opened in the same page we need to use origin
        cy.origin("https://elementalselenium.com/", () => {
        cy.get("[class='hero__title']").invoke('text').then((text) => {
        cy.log(text)
        }) //performing operation in new link 
        cy.get("[id='email']").type("test@gmail.com")
        cy.get("[id='options']").select("python")
        // Go back to the old page
        cy.go('back');
     })
    })
})