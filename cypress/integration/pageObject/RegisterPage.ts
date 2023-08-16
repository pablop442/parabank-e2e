class RegisterPage {
    getFirstNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.firstName')
    }

    getLastNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.lastName')
    }

    getAddressInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.address\\.street')
    }

    getCityInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.address\\.city')
    }

    getStateInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.address\\.state')
    }

    getZipCodeInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.address\\.zipCode') 
    }

    getPhoneInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.phoneNumber')
    }

    getSSNInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.ssn')
    }
    
    getUserNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.username')
    }

    getPasswordInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#customer\\.password')
    }

    getConfirmPasswordInput(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('#repeatedPassword')
    }

    getRegisterButton(): Cypress.Chainable<JQuery<HTMLButtonElement>>{
        return cy.get('[colspan="2"] > .button')
    }
   
}

export default RegisterPage