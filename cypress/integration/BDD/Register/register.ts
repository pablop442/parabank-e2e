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
const password: string = '1234';
const successfulRegisterText: string = 'Your account was created successfully. You are now logged in.';

Given('ParaBank web page is open', function () {
    cy.visit(Cypress.env("url") + "/index.htm");
})

When('I click the register button', function () {
    homePage.getRegisterButton().click()
})

Then('I can fill the register form', function () {
    registerPage.getFirstNameInput().type(firstName);
    registerPage.getLastNameInput().type(lastName);
    registerPage.getAddressInput().type(address);
    registerPage.getCityInput().type(city);
    registerPage.getStateInput().type(state);
    registerPage.getZipCodeInput().type(zipCode);
    registerPage.getPhoneInput().type(phone);
    registerPage.getSSNInput().type(ssn.toString());
    registerPage.getUserNameInput().type(firstName);
    registerPage.getPasswordInput().type(password);
    registerPage.getConfirmPasswordInput().type(password);
    
})

Then('I can submit the register form', function () {
    registerPage.getRegisterButton().click();
    profileMainPage.getFirstTimeWelcomeMessage().should('contain.text', `Welcome ${firstName}`);
    profileMainPage.getSuccessfulRegisterMessage().should('contain.text', successfulRegisterText)
})