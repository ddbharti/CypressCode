describe('CYpress Get API',()=>{

    it('Get Users',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            header:{
                Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response)) //prints the response body
            expect(response.status).to.equal(200)
    })
    
    })

    it('get user1',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/7673046',
            header:{
                Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response)) //prints the response body
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7673046)
    })
    })

    it('get user -Invalid user',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/767304',
            header:{
                Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
            },
            failOnStatusCode:false
        })
        .then((response)=>{
            cy.log(JSON.stringify(response)) //prints the response body
            expect(response.status).to.equal(404)
        })
    })
})