import { homePageLocators } from "../locators/homePageLocators";
const { defineConfig } = require("cypress");

class HomePageObjects {

    verifyHomePagelogo() {
        cy.get(homePageLocators.greenKarLogo).should('be.visible');
    }

    verifyElementOnHomePage(elementName) {
        const locator = homePageLocators[elementName];
        cy.get(locator).should('be.visible');
    }

    verifyFollowingElementOnHomePage(DataTable) {
        const elements = DataTable.rawTable.flat();
        elements.array.forEach(element => {
            const locator = homePageLocators[elementName];
            cy.get(locator).should('be.visible');
        });
    }

    verifyNavigationLinks(linksVisibleText) {
        cy.verifyLinksTextsUsingDataTable(linksVisibleText);
    }

}

export default HomePageObjects;