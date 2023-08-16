import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage";
import ProfileMainPage from "../../pageObject/ProfileMainPage";
import UserFixture from "../../../support/types";

const homePage = new HomePage();
const profileMainPage = new ProfileMainPage();

beforeEach(function () {
    cy.fixture('users.json').as('users');
})

When('I input an incorrect user name', function (){
    cy.get<UserFixture>('@users').then((users) => {
        const userName: string = users.incorrect_user.user_name
          homePage.getUserNameInput().type(userName)
    })
})

When('I input an incorrect password', function (){
    cy.get<UserFixture>('@users').then((users) => {
        const password: string = users.incorrect_user.password
          homePage.getPasswordInput().type(password)
    })
})

Then('I should see an error message', function () {
    homePage.getLoginButton().click()
    profileMainPage.getErrorMessage().should('be.visible')
})