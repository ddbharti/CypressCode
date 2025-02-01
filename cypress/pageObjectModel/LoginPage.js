class Login
{
    setUserName(username)
    {
        cy.get('[name="username"]').type(username)
    }

    setPassword(password)
    {
        cy.get('[type="password"]').type(password)
    }

    clickLogin(clicklogin)
    {
        cy.get('[type="submit"]').click()
    }

    verifySignIn(verifysignin)
    {
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
}

export default Login;