import RegisterPage from "../integration/pageObject/RegisterPage";


const registerPage = new RegisterPage();

Cypress.Commands.add("userRegister", (
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    userName: string,
    ssn?: number,
    password?: string
) => {
    registerPage.getFirstNameInput().type(firstName);
    registerPage.getLastNameInput().type(lastName);
    registerPage.getAddressInput().type(address);
    registerPage.getCityInput().type(city);
    registerPage.getStateInput().type(state);
    registerPage.getZipCodeInput().type(zipCode);
    registerPage.getPhoneInput().type(phone);
    registerPage.getSSNInput().type(ssn.toString());
    registerPage.getUserNameInput().type(userName);
    registerPage.getPasswordInput().type(password);
    registerPage.getConfirmPasswordInput().type(password);
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })