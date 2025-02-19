class NewAccountPage {
    getAccountTypeDropdown(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#type')
    }
    getOpenNewAccountButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('.button[value="Open New Account"]')
    }
    getTypeCheckingOption(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('option[value="0"]')
    }
    getTypeSavingsOption(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('option[value="1"]')
    }
    getAccountOverviewLink(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#leftPanel > ul > :nth-child(2) > a')
    }
    getAccountOpenedMessage(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#openAccountResult > .title')
    }
    getNewAccountNumber(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#newAccountId')
    }
    getAccountNumberColumn(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('tbody > tr > td > a')
    }
    getAccountIdDropdown(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#fromAccountId')
    }
    getAccountDetailsBalance(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#balance')
    }
    



}

export default NewAccountPage