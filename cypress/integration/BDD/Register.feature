Feature: As a new user I want to register in ParaBank

    Scenario: As a new user I want to register with correct information
        Given ParaBank web page is open
        When I click the register button
        Then I can fill the register form
        And I can submit the register form

    Scenario: As a new user I want see an error if data is missing
        Given ParaBank web page is open
        When I click the register button
        And I do not input data in the form
        Then I should see an error message