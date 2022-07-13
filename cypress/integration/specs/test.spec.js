import basePage from '../pages/basePage';
import mainPage from '../pages/mainPage';
import signupPage from '../pages/signupPage';
import loginPage from '../pages/loginPage';
import contactUsPage from '../pages/contactUsPage';
import supportCenterPage from '../pages/supportCenterPage';

describe("Telnyx test", () =>{
    beforeEach(function(){
        cy.viewport(1920, 1080);
        basePage.openURL();
        cy.get('body').then($ele => {
        if ($ele.find('[aria-label="close and deny"] ~div>div>button').is(':visible')) {
        cy.get('[aria-label="close and deny"] ~div>div>button').click({ force: true })
        } else {}
        })
    })
    it('should verify signup with valid credentials', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('full', 60));
        signupPage.mailSentMessage().should('be.visible');
    })
    it('should verify signup with empty fields', function()
    {
        signupPage.signup(' ', ' ', ' ');
        signupPage.requeiredEmailErrorMessage().should('be.visible');
    })
    it('should verify signup with invalid email', function()
    {
        signupPage.signup(basePage.generateText('full', 20), basePage.generateText('withoutSymbols', 20), basePage.generateText('full', 20));
        signupPage.requeiredEmailErrorMessage().should('be.visible');
    })
    it('should verify signup with long email', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 250) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('full', 20));
        signupPage.requeiredEmailErrorMessage().should('be.visible');
    })
    it('should verify signup with long password', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('full', 250));
        signupPage.signUpFormErrorMesage().should('be.visible');
    })
    it('should verify signup with short password', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('full', 10));
        signupPage.passwordContainAtLeast12CharactersLongError().should('be.visible');
    })
    it('should verify signup with password without at least one number', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('withoutSymbols', 20));
        signupPage.passwordContainAtLeastOneNumberError().should('be.visible');
    })
    it('should verify signup with password without at least one symbol', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('withoutNumbers', 20));
        signupPage.passwordContainAtLeastOneSymbolError().should('be.visible');
    })
    it('should verify signup with password without  at least one upper-case letter', function()
    {
        signupPage.signup(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('withoutSymbols', 20), basePage.generateText('onlyLetters', 15).toLowerCase());
        signupPage.passwordContainAtLeastOneUppercaseLetterError().should('be.visible');
    })
    it('should verify signup from mainpage with valid email', function()
    {
        mainPage.emailInput().type(basePage.generateText('withoutSymbols', 10) + '@gmail.com');
        mainPage.clickTryForFreeButton();
        signupPage.fullNameInput().type(basePage.generateText('withoutSymbols', 20));
        signupPage.passwordInput().type(basePage.generateText('full', 20));
        signupPage.clickAgreeToTheTermsAndConditions();
        signupPage.clickCreateAccountButton();
    })
    it('should verify signup from mainpage with invalid email', function()
    {
        mainPage.emailInput().type(basePage.generateText('withoutChars', 10));
        mainPage.clickTryForFreeButton();
        basePage.checkIfLinkNotContains('sign-up')
    })
    it('should login with valid credentials', function()
    {
        loginPage.login('daniltest685@gmail.com', 'test04If!asdf');
        basePage.checkIfLinkContains('/app/');
    })
    /*it('should login with Microsoft with valid credentials', function()
    {
        loginPage.MicrosoftLogin('daniltest685@gmail.com', 'test04If!asdf');
        basePage.checkIfLinkContains('/app/home');
    })*/
    it('should login with LinkedIn with valid credentials', function()
    {
        loginPage.LinkedInLogin('daniltest685@gmail.com', 'test04If!asdf');
        basePage.checkIfLinkContains('/app/');
    })
    /*it('should login with GitHub with valid credentials', function()
    {
        loginPage.GitHubLogin('daniltest685@gmail.com', 'test04If!asdf');
        basePage.checkIfLinkContains('/app/home');
    })*/
    it('should login with invalid password', function()
    {
        loginPage.login('daniltest685@gmail.com', basePage.generateText('full', 20));
        loginPage.logInErrorMessage().should('be.visible');
    })
    it('should login with unregistered email', function()
    {
        loginPage.login(basePage.generateText('withoutSymbols', 10) + '@gmail.com', basePage.generateText('full', 20));
        loginPage.logInErrorMessage().should('be.visible');
    })
    it('should login with unactivated email', function()
    {
        loginPage.login('daniltest686@gmail.com', 'test04If!asdf');
        loginPage.logInErrorMessage().should('be.visible');
    })
    it('should verify forgot password with valid email', function()
    {
        loginPage.clickLogInButton();
        loginPage.resetPassword(basePage.generateText('withoutSymbols', 10) + '@gmail.com');
        loginPage.resetPasswordMailMessage().should('be.visible')
    })
    it('should verify forgot password with invalid email', function()
    {
        loginPage.clickLogInButton();
        loginPage.resetPassword(basePage.generateText('withoutSymbols', 10));
        //loginPage.ResetPasswordErrorMessage().should('be.visible');
    })
    it('should verify talk to an expert with valid credentials with sales iquiry selector', function()
    {
        contactUsPage.schedule('Sales-Inquiry', basePage.generateText('withoutSymbols', 10), basePage.generateText('withoutSymbols', 10), 
        basePage.generateText('withoutSymbols', 10) + '@gmail.com', "https://" + basePage.generateText('withoutSymbols', 10) + ".com", 
        basePage.generatePrimaryInterestValue(), basePage.generateText('full', 20));
    })
    it('should verify talk to an expert with valid credentials with support selector', function()
    {
        contactUsPage.schedule('Support', basePage.generateText('withoutSymbols', 10), basePage.generateText('withoutSymbols', 10), 
        basePage.generateText('withoutSymbols', 10) + '@gmail.com', "https://" + basePage.generateText('withoutSymbols', 10) + ".com");
    })
    it('should verify talk to an expert with valid credentials with legal selector', function()
    {
        contactUsPage.schedule('Legal', basePage.generateText('withoutSymbols', 10), basePage.generateText('withoutSymbols', 10), 
        basePage.generateText('withoutSymbols', 10) + '@gmail.com', "https://" + basePage.generateText('withoutSymbols', 10) + ".com");
    })
    it('should verify talk to an expert with empty credentials', function()
    {
        contactUsPage.clickTalkToAnExpertButton();
        contactUsPage.clickSubmitButton();
        contactUsPage.reasonForContactSelectorErrorMessage().should('be.visible');
        contactUsPage.firstNameInputHighlight().should('be.visible');
        contactUsPage.lastNameInputHighlight().should('be.visible');
        contactUsPage.emailInputHighlight().should('be.visible');
        contactUsPage.websiteInputHighlight().should('be.visible');
    })
    it('should verify top menu tabs', function(){
        let index = ['1', '3', '6', '8', '10']
        for (let i = 0; i < 5; i++){
        mainPage.mouseoverHeaderTab(index[i])
        }
    })
    it('should verify products links', function(){
        mainPage.mouseoverHeaderTab(1);
        let link = ['/products/sip-trunks', '/products/voice-api', '/products/sms-api', '/products/iot-sim-card', '/number-lookup',
                        '/products/phone-numbers', '/products/video', '/products/storage', '/products'] 
        for(let i = 0; i < 9; i++){
            mainPage.mouseoverHeaderTab(1);
            mainPage.clickHeaderMenuLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
        }
    })
    it('should verify solutions links', function(){
        mainPage.mouseoverHeaderTab(3);
        let link = ['/solutions/customer-engagement-platforms', '/solutions/business-to-consumer-brands', 
                         '/use-cases/managed-services-telephony-reseller', '/use-cases/contact-center', '/use-cases/call-tracking',
                         '/use-cases/sms-customer-support', '/use-cases/voip-for-small-business', '/solutions', '/use-cases'] 
        for(let i = 0; i < 9; i++){
            mainPage.mouseoverHeaderTab(3);
            mainPage.clickHeaderMenuLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
        }
    })
    it('should verify resources links', function(){
        mainPage.mouseoverHeaderTab(6);
        let link = ['https://developers.telnyx.com/docs', '/customer-stories', '/resources', '/bring-your-own-carrier', 
                         '/use-cases/mission-control', '/twilio-pricing-calculator'] 
        for(let i = 0; i < 6; i++){
            mainPage.mouseoverHeaderTab(6);
            mainPage.clickHeaderMenuLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
            if(i == 0){cy.go('back')}
        }
    })
    it('should verify company links', function(){
        mainPage.mouseoverHeaderTab(8);
        let link = ['/company', '/company/careers', '/company/partnerships', '/integrations'] 
        for(let i = 0; i < 4; i++){
            mainPage.mouseoverHeaderTab(8);
            mainPage.clickHeaderMenuLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
        }
    })
    it('should verify pricing links', function(){
        mainPage.mouseoverHeaderTab(10);
        let link = ['/pricing/elastic-sip', '/pricing/call-control', '/pricing/messaging', '/pricing/fax', '/pricing/wireless-pricing', 
                       '/pricing/whatsapp-business-api', '/pricing/verify-api', '/pricing/id-services-and-data', '/pricing'] 
        for(let i = 0; i < 9; i++){
            mainPage.mouseoverHeaderTab(10);
            mainPage.clickHeaderMenuLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
        }
    })
    it('should verify support center', function(){
        supportCenterPage.clickSupportCenterLink();
        supportCenterPage.searchInput()
        .type(basePage.generateText('onlyLetters', 1))
        .type('{enter}');
        supportCenterPage.clickFirstResultLink();
        supportCenterPage.clickAllCollectionsLink();
    })
    it('should verify main page powerful products links', function(){
        let link = ['/products/sms-api', '/products/video', '/products/iot-sim-card', 
                    '/products/voice-api', '/products/sip-trunks', '/products/storage'] 
        for(let i = 0; i < 6; i++){
            mainPage.clickPowerfulProductsLink(link[i]);
            basePage.checkIfLinkContains(link[i]);
            cy.go('back');
        }
    })
    it('should verify wrapper', function(){
        mainPage.clickWrapperPreviousItem();
        mainPage.clickWrapperNextItem();
        mainPage.clickWrapperItem1();
        mainPage.clickWrapperItem2();
    })
    it('should verify how much will you save voice slider', function(){
        mainPage.scrollToHowMuchWillYouSave();
        mainPage.clickSliderButton('Voice')
        for(let j = 0; j < 2; j++){
        mainPage.clickHowMuchWillYouSaveRadioButton('local-numbers')
        mainPage.Slider(j+3).type('{rightarrow}'.repeat(basePage.generateNumberForSlider()), {force: true});
        mainPage.clickHowMuchWillYouSaveRadioButton('toll-free-numbers')
        }
        mainPage.clickCreateFreeTrialAccountButton();
        basePage.checkIfLinkContains('sign-up');
    })
    it('should verify how much will you save sms slider', function(){
        mainPage.scrollToHowMuchWillYouSave();
        mainPage.clickSliderButton('SMS')
        for(let j = 0; j < 2; j++){
        mainPage.clickHowMuchWillYouSaveRadioButton('local-numbers')
        mainPage.Slider(j+3).type('{rightarrow}'.repeat(basePage.generateNumberForSlider()));
        }
        mainPage.clickCreateFreeTrialAccountButton();
        basePage.checkIfLinkContains('sign-up');
    })
    it('should verify bottom products links', function(){
        let link = ['/products/sip-trunks', '/products/voice-api', '/products/sms-api', '/products/whatsapp-api', '/products/fax-api', '/products/iot-sim-card', '/number-lookup',
                        '/products/phone-numbers', '/products/verify-api', '/products'] 
        for(let i = 0; i < 9; i++){
            mainPage.checkBottomMenuLink('Products', i+1, link[i]);
        }
    })
    it('should verify bottom resources links', function(){
        let link = ['https://developers.telnyx.com/docs', '/resources', '/learn', '/release-notes'] 
        for(let i = 0; i < 4; i++){
            mainPage.checkBottomMenuLink('Resources', i+1, link[i]);
        }
    })
    it('should verify bottom pricing links', function(){
        let link = ['/pricing/elastic-sip', '/pricing/messaging', '/pricing/call-control', '/pricing/wireless-pricing'] 
        for(let i = 0; i < 4; i++){
            mainPage.checkBottomMenuLink('Pricing', i+1, link[i]);
        }
    })
    it('should verify bottom company links', function(){
        let link = ['/company/about', '/company/careers', '/company/data-privacy', 'https://support.telnyx.com', '/report-abuse',
                        '/privacy-policy', '/cookie-policy', '/acceptable-use-policy', '/terms-and-conditions', 'https://telnyx.com/law-enforcement-request'] 
        for(let i = 0; i < 10; i++){
            mainPage.checkBottomMenuLink('Company', i+1, link[i]);
        }
    })
    it('should verify bottom mission control links', function(){
        let link = ['/sign-up', 'https://portal.telnyx.com/'] 
        for(let i = 0; i < 2; i++){
            mainPage.checkBottomMenuLink('Mission Control', i+1, link[i]);
        }
    })
    it('should verify bottom social links', function(){
        let link = ['https://www.linkedin.com/company/telnyx/', 'https://twitter.com/telnyx', 'https://www.facebook.com/Telnyx/'] 
        for(let i = 0; i < 3; i++){
            mainPage.checkBottomMenuLink('Social', i+1, link[i]);
        }
    })
})
