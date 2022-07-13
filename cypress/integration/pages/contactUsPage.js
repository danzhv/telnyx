class ContactUsPage{
    clickTalkToAnExpertButton(){
        cy.get('header div:nth-child(2)>div>ul:nth-child(4)>li:nth-child(1)>div>a').click();
    }
    reasonForContactSelector(){
        return cy.get('#Reason_for_Contact__c', { timeout: 30000 }).should('be.visible');
    }
    firstNameInput(){
        return cy.get('#FirstName');
    }
    lastNameInput(){
        return cy.get('#LastName');
    }
    emailInput(){
        return cy.get('#Email');
    }
    websiteInput(){
        return cy.get('#Website');
    }
    primaryInterestSelector(){
        return cy.get('#Use_Case_Form__c').should('be.visible');
    }
    clickSubmitButton(){
        cy.get('[class="mktoButton"]').should('be.visible').click();
    }
    reasonForContactSelectorErrorMessage(){
        return cy.get('#ValidMsgReason_for_Contact__c', { timeout: 30000 });   
    }
    firstNameInputHighlight(){
        return cy.get(this.firstNameInput)
        .should('have.attr', 'aria-invalid', 'true');
    }
    lastNameInputHighlight(){
        return cy.get(this.lastNameInput)
        .should('have.attr', 'aria-invalid', 'true');
    }
    emailInputHighlight(){
        return cy.get(this.emailInput)
        .should('have.attr', 'aria-invalid', 'true');
    }
    websiteInputHighlight(){
        return cy.get(this.websiteInput)
        .should('have.attr', 'aria-invalid', 'true');
    }
    thanksForMessage(){
        return cy.get('[class="Text-sc-5o8owa-0 sc-55a4f07f-1 iTsrVq cgMQXX"]', { timeout: 30000 });
    }
    clickNextButton(){
        cy.wait(10000)
        cy.get('#groove-frame', { timeout: 10000 })
        .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
        .find('[class="c19e9"]').contains('Next').click()
        })
    }
    scheduleMeetingNameInput(){
        return cy.get('#groove-frame', { timeout: 10000 })
        .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body).find('#groove-input-Name');
        })
    }
    scheduleMeetingEmailInput(){
        return cy.get('#groove-frame', { timeout: 10000 })
        .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body).find('#groove-input-Email');
        })
    }
    scheduleMeetingCommentsInput(){
        return cy.get('#groove-frame', { timeout: 10000 })
        .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body).find('#groove-input-Comments');
        })
    }
    clickScheduleButton(){
        cy.get('#groove-frame', { timeout: 10000 })
        .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
        .find('[class="c19e9"]').contains('Schedule').click()
        })
    }
    schedule(selector, firstName, lastName, email, website, primaryInterest, message){
        this.clickTalkToAnExpertButton();
        this.reasonForContactSelector().select(selector);
        this.firstNameInput().type(firstName);
        this.lastNameInput().type(lastName);
        this.emailInput().type(email);
        this.websiteInput().type(website);
        if (selector == 'Sales-Inquiry'){
            this.primaryInterestSelector().select(primaryInterest);
        }
        this.clickSubmitButton();
        if (selector != 'Sales-Inquiry'){
            this.thanksForMessage().should('be.visible');;
        }else{ 
            this.clickNextButton();
            this.scheduleMeetingNameInput().type(firstName);
            this.scheduleMeetingEmailInput().type(email);
            this.scheduleMeetingCommentsInput().type(message);
            this.clickScheduleButton();
        }
    }
}

module.exports = new ContactUsPage