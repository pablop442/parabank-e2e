import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage";
import ProfileMainPage from "../../pageObject/ProfileMainPage";
import UserFixture from "../../../support/types";

const homePage = new HomePage();
const profileMainPage = new ProfileMainPage();

beforeEach(function () {
    cy.fixture('users.json').as('users');
})
  



Given('ParaBank web page is open', function () {
    cy.visit(Cypress.env("url") + "/index.htm");
})

When('I input my correct user name', function () {
    cy.get<UserFixture>('@users').then((users) => {
        const userName: string = users.correct_user.user_name
          homePage.getUserNameInput().type(userName)
    })
  
})

When('I input my correct password', function () {
    cy.get<UserFixture>('@users').then((users) => {
        const password: string = users.correct_user.password
        homePage.getPasswordInput().type(password)
    })
})

Then('I should see my account main page', function () {
    cy.get<UserFixture>('@users').then((users) => {
        const firstName: string = users.correct_user.first_name;
        const lastName: string = users.correct_user.last_name;
         homePage.getLoginButton().click()
    profileMainPage.getWelcomeMessage().should('contain.text', `Welcome ${firstName} ${lastName}`)
    })
   
})