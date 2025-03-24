Feature: As a user I want to properly use my account services

    Scenario: As a user I want to successfully open a new account
        Given I am logged into ParaBank
        When I open a new Savings account
        Then I see a new account created in my accounts overview page
        And I see a new account details with correct balance

    Scenario: As a user I want to transfer funds from one account to another
        Given I am logged into ParaBank
        When I transfer funds from my Checking account to my Savings account
        Then I see the funds transferred successfully