Feature: As a new user I want to register in ParaBank

    Scenario: As a new user I want to register with correct information
        Given ParaBank web page is open
        When I click the register button
        Then I can fill the register form
        And I can submit the register form