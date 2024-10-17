# Arbree Assignment

This project is a test automation suite using Playwright and Cucumber for end-to-end testing of a web application.

## Project Structure

- `.github/`
  - `workflows/`
    - `playwright.yml`: GitHub Actions workflow for running Playwright tests.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `cucumber.js`: Configuration file for Cucumber.
- `features/`: Contains the feature files written in Gherkin syntax.
  - `checkout.feature`: Feature file for the checkout process.
- `package.json`: Node.js project configuration file.
- `pages/`: Contains the Page Object Model (POM) classes for different pages of the application.
  - `CartPage.ts`: Page object for the cart page.
  - `HomePage.ts`: Page object for the home page.
  - `LoginPage.ts`: Page object for the login page.
- `playwright-report/`: Contains the Playwright test reports.
- `playwright.config.ts`: Configuration file for Playwright.
- `README.md`: This file.
- `reports/`: Contains the Cucumber test reports.
- `steps/`: Contains the step definitions for the Cucumber tests.
  - `checkout.steps.ts`: Step definitions for the checkout feature.
- `test-results/`: Contains the test results.
- `tests/`: Contains the Playwright test specifications.
  - `test.spec.ts`: Playwright test specification for the checkout process.
- `tsconfig.json`: TypeScript configuration file.


## Installation

1. **Clone the repository:**
   
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Install dependencies:**
   
   ```sh
   npm install
   ```

## Running Tests

### Running Playwright Tests

To run the Playwright tests, use the following command:

```sh
npm run test
```

### Running Cucumber BDD Tests

To run the Cucumber BDD tests, use the following command:

```sh
npx cucumber-js
```

### Test Details
### Playwright Test Specification
The Playwright test specification is located in tests/test.spec.ts. It includes the following steps:

Navigate to the website.
Login as standard_user.
Add Sauce Labs Backpack to the cart.
Verify the correct items were added to the cart.
Complete the checkout process.

### Cucumber Feature
The Cucumber feature file is located in features/checkout.feature. It describes the checkout process scenario:

Navigate to the website.
Login as standard_user with password secret_sauce.
Add Sauce Labs Backpack to the cart.
Navigate to the cart.
Verify Sauce Labs Backpack is in the cart.
Proceed to checkout.
Fill in checkout details with John, Doe, 12345.
Complete the checkout process.

### Page Object Model (POM) Classes
LoginPage.ts: Handles login functionality.
HomePage.ts: Handles actions on the home page.
CartPage.ts: Handles actions on the cart page.

### Step Definitions
The step definitions for the Cucumber tests are located in steps/checkout.steps.ts. They map the Gherkin steps to the actual code implementation.

### CI/CD
The project uses GitHub Actions for continuous integration. The workflow is defined in playwright.yml. It runs the Playwright tests on every push or pull request to the main or master branches. 
