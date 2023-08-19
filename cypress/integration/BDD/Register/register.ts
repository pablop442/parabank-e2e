import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage";
import RegisterPage from "../../pageObject/RegisterPage";
import {faker} from '@faker-js/faker'
import ProfileMainPage from "../../pageObject/ProfileMainPage";


const homePage = new HomePage();
const registerPage = new RegisterPage();
const profileMainPage = new ProfileMainPage();

const firstName: string = faker.person.firstName();
const lastName: string = faker.person.lastName();
const address: string = faker.location.streetAddress();
const city: string = faker.location.city();
const state: string = faker.location.state();
const zipCode: string = faker.location.zipCode();
const phone: string = faker.phone.number();
const ssn: number = faker.number.int();
const userName: string = faker.person.fullName();
const password: string = '1234';
const errorMessage: string = 'is required'
const successfulRegisterText: string = 'Your account was created successfully. You are now logged in.';

Given('ParaBank web page is open', function () {
    cy.visit(Cypress.env("url") + "/index.htm");
})

When('I click the register button', function () {
    homePage.getRegisterButton().click()
})

Then('I can fill the register form', function () {
    cy.userRegister(
        firstName,
        lastName,
        address,
        city,
        state,
        zipCode,
        phone,
        userName,
        ssn,
        password
   )
    
})

Then('I can submit the register form', function () {
    registerPage.getRegisterButton().click();
    profileMainPage.getFirstTimeWelcomeMessage().should('contain.text', `Welcome ${userName}`);
    profileMainPage.getSuccessfulRegisterMessage().should('contain.text', successfulRegisterText)
})

When('I do not input data in the form', function () {
    registerPage.getRegisterButton().click();
})

Then('I should see an error message', function () {
   cy.get('.error').should('contain', errorMessage)
})