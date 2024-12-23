import { homePageLocators } from "../locators/homePageLocators";
class HomePageObjects {

    verifyHomePagelogo() {
        cy.get(homePageLocators.greenKarLogo).should('be.visible');
    }

    verifyElementOnHomePage(elementName) {
        const locator = homePageLocators[elementName];
        cy.get(locator).should('be.visible');
    }

    verifyNavigationLinks(linksVisibleText) {
        cy.contains(linksVisibleText).should('be.visible').should('have.attr', 'href');
    }

}

export default HomePageObjects;