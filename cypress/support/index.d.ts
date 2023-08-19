/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to register any user with mandatory fields
         */
        userRegister(firstName: string,
            lastName: string,
            address: string,
            city: string,
            state: string,
            zipCode: string,
            phone: string,
            userName: string,
            ssn?: number,
            password?: string): Chainable<null>;
    }
}