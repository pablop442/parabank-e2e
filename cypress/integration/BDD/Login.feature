Feature: As a user I want to login to my personal account

    Scenario: As a user I want to successfully log in to my account
        Given ParaBank web page is open
        When I input my correct user name
        And I input my correct password
        Then I should see my account main page

    Scenario: As a user with incorrect user name I want to see an error message
        Given ParaBank web page is open
        When I input an incorrect user name
        And I input my correct password
        Then I should see an error message

    Scenario: As a user with incorrect password I want to see an error message
        Given ParaBank web page is open
        When I input my correct user name
        And I input an incorrect password
        Then I should see an error message