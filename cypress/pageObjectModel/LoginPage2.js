class Login
{

    txtUserName='[name="username"]';
    txtPassword='[type="password"]';
    btnSubmit='[type="submit"]';
    vrmsg='.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    clickLogin(clicklogin)
    {
        cy.get(this.btnSubmit).click()
    }

    verifySignIn(verifysignin)
    {
        cy.get(this.vrmsg).should('have.text','Dashboard')
    }
}

export default Login;