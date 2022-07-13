class SignupPage{
    clickSignUpButton(){
        cy.get('header div:nth-child(2)>div>ul:nth-child(4)>li:nth-child(2)>div>a').should('be.visible').click();
    }
    workEmailInput(){
        return cy.get('#email').should('be.visible');
    }
    fullNameInput(){
        return cy.get('#full_name').should('be.visible');
    }
    passwordInput(){
        return cy.get('#password').should('be.visible');
    }
    clickAgreeToTheTermsAndConditions(){
        cy.get('[aria-labelledby="terms-label"]').click();
    }
    clickCreateAccountButton(){
        cy.get('[type="submit"]').should('be.visible').click();
    }
    mailSentMessage(){
        return cy.get('[name="emailNew"]', { timeout: 30000 });
    }
    requeiredEmailErrorMessage(){
        return cy.get('#email_error', { timeout: 30000 });
    }
    signUpFormErrorMesage(){
        return cy.get('#signup-form_error', { timeout: 30000 });
    }
    passwordContainAtLeast12CharactersLongError(){
        return cy.get('#password_requirements>div:nth-child(2)', { timeout: 10000 });
    }
    passwordContainAtLeastOneNumberError(){
        return cy.get('#password_requirements>div:nth-child(3)', { timeout: 10000 });
    }
    passwordContainAtLeastOneSymbolError(){
        return cy.get('#password_requirements>div:nth-child(4)', { timeout: 10000 });
    }
    passwordContainAtLeastOneUppercaseLetterError(){
        return cy.get('#password_requirements>div:nth-child(5)', { timeout: 10000 });
    }
    signup(email, name, password){
        this.clickSignUpButton();
        this.workEmailInput().type(email);
        this.fullNameInput().type(name);
        this.passwordInput().type(password);
        this.clickAgreeToTheTermsAndConditions();
        this.clickCreateAccountButton();
    }
}

module.exports = new SignupPage