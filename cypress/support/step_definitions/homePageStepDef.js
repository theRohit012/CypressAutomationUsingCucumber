import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePageObjects from "../../e2e/pageObjects/homePageObjects";
const homePage = new HomePageObjects();

Given("I am opening a baseURL", () => {
    cy.visit("/");
})

Then("I verify the greenKart logo on homePage", () => {
    homePage.verifyHomePagelogo();
})

Then("I verify the {string} element on HomePage", (element) => {
    homePage.verifyElementOnHomePage(element);
})

Then("I verify following link text in Header", (DataTable) => {
    homePage.verifyNavigationLinks(DataTable);
})