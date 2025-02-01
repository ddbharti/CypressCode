describe('Mouse Operations suite',()=>{

    it('Mouse Hover',()=>{

        cy.visit('https://demo-opencart.com/')
       // cy.get('li>[href="https://demo-opencart.com/index.php?route=product/category&language=en-gb&path=20"]')

       //cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      // .should('not.be.visible')

       cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

      // cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      // .should('be.visible')

       cy.get('.nav > :nth-child(1) > .dropdown-toggle').invoke('show')

    })

    it('Right Click',()=>{
        //Approach 1
       cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        /* cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-icon-paste > span').should('be.visible')
        */
        //Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-paste > span').should('be.visible')
        
    })

    it('Double Click',()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('[name="iframeResult"]')
        cy.iframe('[name="iframeResult"]').find('[ondblclick="myFunction()"]').trigger('dblclick')
        cy.iframe('[name="iframeResult"]').find('#field2').should('have.value','Hello World!')

        
    })

    it('Drag and Drop',()=>{
        // install plugin: npm install --save-dev @4tw/cypress-drag-drop
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        cy.get('#box6').drag('#box106',{force:true})

        
    })

    it.only('Scrolling',()=>{
        // Scroll Down 
        cy.visit('https://www.browserstack.com/guide/selenium-scroll-tutorial');
        cy.get(':nth-child(15) > .btn-primary').scrollIntoView({duration:4000});

        // Scroll Up 

        cy.get('.guide-toc__heading').scrollIntoView({duration:6000});
        cy.wait(3000)
        cy.get('.custom-footer-btn-text').scrollIntoView({duration:3000});
    })
})