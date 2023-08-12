class ProfileMainPage{
    getWelcomeMessage(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('.smallText')
    }

    getErrorMessage(): Cypress.Chainable<JQuery<HTMLInputElement>>{
        return cy.get('.error')
    }
}

export default ProfileMainPage


