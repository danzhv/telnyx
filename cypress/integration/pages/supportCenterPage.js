class SupportCenterPage{
    clickSupportCenterLink(){
        cy.get('div[id="__next"]>div>header>div>div>div:nth-child(2)>a:nth-child(3)', { timeout: 30000 }).click();
    }
    searchInput(){
        return cy.get('[class="search__input js__search-input o__ltr"]');
    }
    clickFirstResultLink(){
        cy.xpath('//*[@class="section section__search_results"]//div[@class="g__space search-results__row"][1]', { timeout: 30000 }).click();
    }
    clickAllCollectionsLink(){
        cy.xpath('//*[@class="breadcrumb"]//div[1]', { timeout: 30000 }).click();
    }
}   

module.exports = new SupportCenterPage