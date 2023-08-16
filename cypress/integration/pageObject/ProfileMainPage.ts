class ProfileMainPage{
    getWelcomeMessage(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('.smallText')
    }

    getErrorMessage(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('.error')
    }

    getFirstTimeWelcomeMessage(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('.title')
    }

    getSuccessfulRegisterMessage(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#rightPanel > p')
    }
}

export default ProfileMainPage


