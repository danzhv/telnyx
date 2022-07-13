class MainPage{
    mouseoverHeaderTab(index){
        cy.get(`header>div:nth-child(2)>div>div:nth-child(3)>ul>li:nth-child(${index})>span>span`, { timeout: 30000 }).realHover();
    }
    clickHeaderMenuLink(link){
        cy.get(`[tabindex="0"] ~div [href="${link}"] span`).click({force: true});
    }
    checkBottomMenuLink(menu, index, link){
        cy.xpath(`//p[contains(text(),"${menu}")]/following-sibling::ul//li[${index}]//a`).should('have.attr', 'href', link);
    }
    clickPowerfulProductsLink(link){
        cy.get(`main>div:nth-child(2)>div>div:nth-child(4)>div>ul>li>a[href="${link}"]`).click({force: true});
    }
    clickTelnyxLogo(){
        cy.get('#Logo-Dark_svg__Layer_1').trigger('mouseover').click();
    }
    emailInput(){
        return cy.get('[name="email"]');
    }
    clickTryForFreeButton(){
        cy.get('[type="submit"]').click();
    }
    ///////slider
    scrollToHowMuchWillYouSave(){
        cy.xpath('//span[contains(text(),"Switch + Save with Telnyx.")]', { timeout: 30000 }).scrollIntoView();
    }
    clickSliderButton(slider){
        cy.xpath(`//button[contains(text(),"${slider}")]`, { timeout: 30000 }).scrollIntoView().click({force: true});
    }
    clickLocalNumbersRadioButton(){
        cy.get('main>div:nth-child(2)>div>div:nth-child(8)>div>div>div>div>div>div>div:nth-child(3)>div:nth-child(2)>div>svg').click();
    }
    clickTollFreeNumbersRadioButton(){
        cy.get('main>div:nth-child(2)>div>div:nth-child(8)>div>div>div>div>div>div>div:nth-child(3)>div:nth-child(3)>div>svg').click();
    }
    Slider(index){
        return cy.xpath(`//div[contains(text(),"How much will you save")]/following-sibling::div[${index}]//div[@role="slider"]`);
    }
    clickHowMuchWillYouSaveRadioButton(id){
        cy.get(`#${id}`).click();
    }
    clickCreateFreeTrialAccountButton(){
        cy.xpath('//a[contains(text(),"Create a free trial account")]').click();
    }
    ////////
    clickWrapperPreviousItem(){
        cy.get('[aria-label="Previous Item"]', { timeout: 30000 }).click({force: true});
    }
    clickWrapperNextItem(){
        cy.get('[aria-label="Next Item"]').click({force: true});
    }
    clickWrapperItem1(){
        cy.get('[aria-label="Slide 1"]').click({force: true});
    }
    clickWrapperItem2(){
        cy.get('[aria-label="Slide 2"]').click({force: true});
    }
}

module.exports = new MainPage