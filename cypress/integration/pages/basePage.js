class basePage{
    openURL(){
        cy.visit("https://telnyx.com");
    }
    
    generateText(typeOfChars, countChars){                 
        let chars = '';
        let string = '';
        switch (typeOfChars){
            case 'full': 
            chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ1234567890!@#$%^&*()_+|}"?>~';
            break;
            case 'withoutNumbers': 
            chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ!@#$%^&*()_+|}"?>~';
            break;
            case 'withoutSymbols':
            chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ1234567890';
            break;
            case 'onlyLetters':
            chars = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';
            break;
        }
        for (let i=0; i < countChars; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        return(string);
    }

    getIframeDocument(){
        return cy.get('#groove-frame')
      }
    
    getIframeBody(){
        return this.getIframeDocument()
        
        .then(cy.wrap)
    }

    generatePrimaryInterestValue(){
        let chars = ['AI / Voice Analytics', 'Alerts & Notifications', 'Build Custom Call Flows', 'Conversational Messaging',
                     'Marketing / Promotions', 'Programmable Network', 'SIP Interop / SIP Trunking', 'Verification / 2FA', 
                     'Video', 'Wireless'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    checkIfLinkContains(url){
        cy.url({ timeout: 30000 }).should('include', url);
    } 
    
    checkIfLinkNotContains(url){
        cy.url().should('not.include', url);
    }

    generateNumberForSlider(){
        let number = Math.floor(Math.random() * 500);
        return(number);
    }

}

module.exports = new basePage