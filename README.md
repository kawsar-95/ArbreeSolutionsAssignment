# Arbree Assignment

This project is a test automation suite using Playwright and Cucumber for end-to-end testing of a web application.

## Project Structure

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


