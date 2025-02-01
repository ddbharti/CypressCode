describe('HTTP Requests',()=>{

    //GET Call
    it('GET call',()=>{

        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status') //gives the status code
        .should('equal',200)
    })

    //POST Call
    it('POST call',()=>{

        cy.request( {
                        method:'POST',
                        url:'https://reqres.in/api/users',
                        body:{
                                name: "morpheus",
                                job: "leader"
                             }
                 })
                 .its('status').should('equal',201)
    })

    //PUT Call
    it('Put call',()=>{

        cy.request({
                    method:'PUT',
                    url:'https://reqres.in/api/users/2',
                    body:{
                        name: "morpheus",
                        job: "zion resident"
                        }
                 })
                 .its('status')
                 .should('equal',200)
    })

    //DELETE Call
    it('Delete Call',()=>{

        cy.request('DELETE', 'https://reqres.in/api/users/2')
        .its('status').should('equal',204)
    })
})