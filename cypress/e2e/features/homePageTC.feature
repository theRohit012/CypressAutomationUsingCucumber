Feature: Verify homepage functionalites

    Background:
        Given I am opening a baseURL

    Scenario Outline: verify the HomePage Logo Icon
        Then I verify the greenKart logo on homePage

    Scenario Outline: verify Navigation Links
        Then I verify "<navigationLinks>" as navigation link on header

        Examples:
            | navigationLinks |
            | Top Deals       |
            | Flight Booking  |