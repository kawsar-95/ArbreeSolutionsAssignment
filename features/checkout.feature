Feature: Checkout Item

  Scenario: Complete checkout process
    Given I navigate to the website
    When I login as "standard_user" with password "secret_sauce"
    And I add "Sauce Labs Backpack" to the cart
    And I navigate to the cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I proceed to checkout
    And I fill in checkout details with "John", "Doe", "12345"
    Then I should complete the checkout process