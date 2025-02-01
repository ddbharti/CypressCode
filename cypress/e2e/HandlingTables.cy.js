describe('Handling Web Tables suite',()=>{

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/')
        cy.get('#input-username').clear().type('demo')
        cy.get('#input-password').clear().type('demo')
        cy.get('button[type="submit"]').click()

        cy.get('li[id="menu-customer"]>a').click() // Customer main menu
        cy.get('li[id="menu-customer"]>ul>li:first-child').click() // Customer sub menu
        cy.wait(3000)

    })

    it('Rows and columns- Customers',()=>{

       
        //Table rows
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        //Check table columns
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')

    })

    it('check cell data from specific row and column',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(8)>td:nth-child(3)').contains('kmbs4@gmail.com')
    })

    it('read all data in rows and columns from first page',()=>{
      
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(  ($row, index, $rows)=>{

            cy.wrap($row).within(()=>{
                cy.get('td').each(  ($col, index, $cols)=>{
                    cy.log($col.text())
                })
            })
            
        })
    })

    // Pagination

    it.only('Pagination',()=>{

        /*cy.get('[class="col-sm-6 text-end"]').then((e)=>{

            let mytext=e.text(); //Showing 1 to 10 of 13300 (1330 Pages)
            let totalpages=mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
            cy.log("Total number of pages==========>  "+ totalpages);
        })*/

       // Read email addres for total 5 pages

       let totalPages=5;
       
       for(let p=1;p<totalPages;p++)
       {
            if(totalPages>1)
            {
                cy.log("Active page is=> "+p)

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000)
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                .each( ($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());
                        })
                    })
                })
            }
       }
    })

   
})