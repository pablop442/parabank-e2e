Feature: As a user I want to properly use my account services

    Scenario: As a user I want to successfully open a new account
        Given I am logged into ParaBank
        When I open a new Savings account
        Then I see a new account created in my accounts overview
