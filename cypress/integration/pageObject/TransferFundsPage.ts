class TransferFundsPage {
    getAmountInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#amount');
    }
    getFromAccountSelect(): Cypress.Chainable<JQuery<HTMLSelectElement>> {
        return cy.get('#fromAccountId');
    }
    getToAccountSelect(): Cypress.Chainable<JQuery<HTMLSelectElement>> {
        return cy.get('#toAccountId');
    }

    getTransferButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get('.button[value="Transfer"]');
    }
    getSavingsAccountOption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#toAccountId > option[value="12345"]');
    }
    getCheckingAccountOption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#toAccountId > option[value="54321"]');
    }
    getTransferCompletedMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#showResult > h1').contains('Transfer Complete!');
    }
    getTransferedAmountText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#amountResult');
    }
}

export default TransferFundsPage