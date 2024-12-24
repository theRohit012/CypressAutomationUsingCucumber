Feature: Verify homePage functionalites

    Background:
        Given I am opening a baseURL

    Scenario Outline: Verify Application Logo
        Then I verify the greenKart logo on homePage

    Scenario Outline: Verify Application Header
        Then I verify following link text in Header
            | Top Deals      |
            | Flight Booking |