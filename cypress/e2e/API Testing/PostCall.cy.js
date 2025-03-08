import payload from '../../config/payload.json'

describe('Post Call - Cypress',()=>{

    function generateRandomEmail(){
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString + "@dispostable.com"
        return email
    }

    it('Post call',()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                    },
            body:{
                "name":"D D Bharti",
                "email":"cypress112@gmail.com",
                "gender":"male",
                "status":"active"
                }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","D D Bharti")
            expect(response.body).has.property("email","cypress112@gmail.com")
            expect(response.body).has.property("gender","male")
            expect(response.body.id).to.not.be.null
        })
    })

    it('Post call 2',()=>{

        let emailAddress = generateRandomEmail()

        cy.log("Email address--->>  " + emailAddress)
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                    },
            body:{
                "name":"D D Bharti",
                "email":emailAddress,
                "gender":"male",
                "status":"active"
                }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","D D Bharti")
            expect(response.body.email).to.not.be.null
            expect(response.body).has.property("gender","male")
            expect(response.body.id).to.not.be.null
        })
    })

    it('Post call 2',()=>{

        let emailAddress = generateRandomEmail()

        let payload ={
            "name":"D D Bharti",
                "email":emailAddress,
                "gender":"male",
                "status":"active"
        }

        cy.log("Email address--->>  " + emailAddress)
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                    },
            body:payload
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","D D Bharti")
            expect(response.body.email).to.not.be.null
            expect(response.body).has.property("gender","male")
            expect(response.body.id).to.not.be.null
        })
    })

    it.only('Post call --Fixture',()=>{

        cy.fixture('PostUser.json').then((responseobject)=>{

            responseobject.email=generateRandomEmail()

            cy.log("Email address--->>  " +  responseobject.email)
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                    },
            body:responseobject
            
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","D D Bharti")
            expect(response.body.email).to.not.be.null
            expect(response.body).has.property("gender","male")
            expect(response.body.id).to.not.be.null
        })
        })     

        
    })

    it('Post call --Config',()=>{

      

            cy.log("Email address--->>  " +  responseobject.email)
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                     Authorization:'Bearer 0071a9d755dc45b6bbcacf62c54521da24d178795d4a94e4905d5c257136ff35'
                    },
            body:payload
            
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name","D D Bharti")
            expect(response.body.email).to.not.be.null
            expect(response.body).has.property("gender","male")
            expect(response.body.id).to.not.be.null
        })
        })     

        
    


})