class Login{

    Email_Locator = "[name='email']";
    Password_Locator = "[name='password']";
    Login_Bt_Locator = "[type='submit']";




    set_user_email()
    
        {
            return cy.get(this.Email_Locator)
        }

    set_user_password()
    
        { 
            return cy.get(this.Password_Locator)
        }

    bt_submit()

        {
            return cy.get(this.Login_Bt_Locator)
        }

    set_logout()
    {
        cy.get("#options-menu").click({multiple: true});
        cy.get('.absolute > :nth-child(7)').click({multiple: true});
    }

    

}

export default Login;