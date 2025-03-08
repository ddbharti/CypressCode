describe('PUT Call',()=>{

    it('PUT call using JSON',()=>{

        cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/7689057',
            headers:{
                 Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
            },
            body:{
                    "name": "DD Bharti put 1",
                    "email": "cypress3put@gmail.com"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body).has.property("name", "DD Bharti put 1")

        })
    })


    it.only('PUT call using Fixtures',()=>{

        cy.fixture('Payload_PUT_USER.json').then((payload)=>{

            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/7689057',
                headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                },
                body:payload
            }).then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body).has.property("name", "DD Bharti 1234")
    
            })
        })

        
    })
})