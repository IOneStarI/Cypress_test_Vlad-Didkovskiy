# Cypress_test_Vlad-Didkovskiy

This project contains automated tests for the Sauce Demo website using the Cypress testing framework.

## Prerequisites

1. Install [Visual Studio Code](https://code.visualstudio.com/download) (Free version).
2. Install Cypress by following the setup guide: [Cypress Installation](https://www.toolsqa.com/cypress/install-cypress/).

## Project Setup

1. Clone or download this repository to your local machine.
2. Open Visual Studio Code and navigate to the project folder "Cypress_test_(your_name)".
3. Install project dependencies by running the following command in the terminal: npm install

## Running Tests

To run the tests, use the following command: npm test / npm open
This will open the Cypress Test Runner, allowing you to select and execute individual test cases or run all test cases in different browsers.

## Test Cases

1. Verify that the page loaded successfully
2. Verify elements of login form displaed correctly
3. Log in without filling username
4. Log in without filling password
5. Log in without filling password and username
6. Log in with invalid username
7. Log in with invalid password
8. Log in with locked user
   - Login: locked_out_user
   - Pass: secret_sauce
9. Verify user can login and logout
   - Login: standard_user
   - Pass: secret_sauce
10. Verify item list displaed corectly
11. User can add item to shopping cart
12. User can remove item to shopping cart
13. Verify items are sorted alphabetically
14. Verify items are sorted oposite way
15. Verify items are sorted by price low to high
16. Verify items are sorted by price high to low

## Report

The test results and logs will be displayed in the Cypress Test Runner. You can also find videos of the test runs in the "videos" folder.
