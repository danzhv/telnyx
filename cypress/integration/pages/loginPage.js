class LoginPage{
    clickLogInButton(){
        cy.get('div[id="__next"]>div>header>div>div>div:nth-child(2)>a:nth-child(4)').click();
    }
    workEmailInput(){
        return cy.get('[aria-label="loginForm"]>div>div>label>div>div>input[name="email"]');
    }
    passwordInput(){
        return cy.get('[name="password"]');
    }
    clickLogInAccountButton(){
        cy.get('[aria-label="loginForm"]>button').click();
    }
    clickLogInWithAnotherOAuthProvider(){
        cy.get('[name="login"]>div>button:nth-child(3)').click();
    }
    clickLogInWithMicrosoftButton(){
        cy.get('[name="login"]>div>form').click();
    }
    clickLogInWithLinkedInButton(){
        cy.get('[name="login"]>div>form:nth-child(4)>button').click();
    }
    clickLogInWithGitHubButton(){
        cy.get('[name="login"]>div>form:nth-child(5)>button').click();
    }
    MicrosoftEmailInput(){
        return cy.get('[type="email"]');
    }
    MicrosoftPasswordInput(){
        return cy.get('[name="passwd"]');
    }
    clickMicrosoftSubmitButton(){
        cy.get('[type="submit"]').click();
    }
    clickMicrosoftNoButton(){
        cy.get('[type="button"]').click();
    }
    LinkedInEmailInput(){
        return cy.get('#username')
    }
    LinkedInPasswordInput(){
        return cy.get('#password')
    }
    clickLinkedInSubmitButton(){
        cy.get('[type="submit"]').click();
    }
    GitHubEmailInput(){
        return cy.get('#login_field');
    }
    GitHubPasswordInput(){
        return cy.get('#password');
    }
    clickGitHubSubmitButton(){
        cy.get('[type="submit"]').click();
    }
    clickGitHubAuthorizeButton(){
        cy.get('[name="authorize"]').click();
    }
    logInErrorMessage(){
        return cy.get('[data-testid="login.signin.message"]', { timeout: 30000 });
    }
    login(email, password){
        this.clickLogInButton();
        this.workEmailInput().type(email);
        this.passwordInput().type(password);
        this.clickLogInAccountButton();
    }
    MicrosoftLogin(email, password){
        this.clickLogInButton();
        this.clickLogInWithMicrosoftButton();
        this.MicrosoftEmailInput().type(email);
        this.clickMicrosoftSubmitButton();
        this.passwordInput().type(password);
        this.clickMicrosoftSubmitButton();
        this.clickMicrosoftNoButton();
    }
    LinkedInLogin(email, password){
        this.clickLogInButton();
        this.clickLogInWithAnotherOAuthProvider();
        this.clickLogInWithLinkedInButton();
        this.LinkedInEmailInput().clear();
        this.LinkedInEmailInput().type(email);
        this.LinkedInPasswordInput().type(password);
        this.clickLinkedInSubmitButton();
    }
    GitHubLogin(email, password){
        this.clickLogInButton();
        this.clickLogInWithAnotherOAuthProvider();
        this.clickLogInWithGitHubButton();
        this.GitHubEmailInput().type(email);
        this.GitHubPasswordInput().type(password);
        this.clickGitHubSubmitButton();
        this.clickGitHubAuthorizeButton();
    }
    clickForgotPasswordLink(){
        cy.get('[href="/#/login/password-reset"]').click();
    }
    forgotPasswordEmailInput(){
        return cy.get('[name="email"]');
    }
    clickResetPasswordButton(){
        cy.get('[role="button"]').click();
    }
    resetPasswordMailMessage(){
        return cy.get('[data-testid="login.pwreset.message"]>div[type="success"]', { timeout: 30000 });
    }
    resetPasswordErrorMesage(){
        return cy.get('[data-testid="login.pwreset.message"]>div[type="error"]', { timeout: 30000 });
    }
    resetPassword(email){
        this.clickForgotPasswordLink();
        this.forgotPasswordEmailInput().type(email);
        this.clickResetPasswordButton();
    }
}

module.exports = new LoginPage