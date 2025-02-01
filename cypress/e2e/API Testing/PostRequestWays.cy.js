describe('Different ways to create POST request Body',()=>{

    it('Approach 1 - Hard coded json object',()=>{

        const requestBody={

                            name:'raj',
                            job:'leader'
                         }

        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body: requestBody
                 })
                    .then((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.name).to.eq('raj')
                    expect(response.job).to.eq('leader')
                    
        })

    })
})