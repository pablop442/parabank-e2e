class HomePage {
    getUserNameInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(':nth-child(2) > .input')
    }
    getPasswordInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(':nth-child(4) > .input')
    }
    getLoginButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(':nth-child(5) > .button')
    }
    getForgotInfoButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#loginPanel > :nth-child(2) > a')
    }
    getRegisterButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#loginPanel > :nth-child(3) > a')
    }
}

export default HomePage