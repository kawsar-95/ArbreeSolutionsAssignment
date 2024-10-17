import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { Page, Browser, chromium } from 'playwright';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let homePage: HomePage;
let cartPage: CartPage;

Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('I navigate to the website', async () => {
  await page.goto('https://www.saucedemo.com/');
});

When('I login as {string} with password {string}', async (username: string, password: string) => {
  loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

When('I add {string} to the cart', async (item: string) => {
  homePage = new HomePage(page);
  await homePage.addItemToCart(item);
});

When('I navigate to the cart', async () => {
  await homePage.navigateToCart();
});

Then('I should see {string} in the cart', async (item: string) => {
  cartPage = new CartPage(page);
  await cartPage.verifyItemInCart(item);
});

When('I proceed to checkout', async () => {
  await cartPage.proceedToCheckout();
});

When('I fill in checkout details with {string}, {string}, {string}', async (firstName: string, lastName: string, postalCode: string) => {
  await cartPage.fillCheckoutDetails(firstName, lastName, postalCode);
});

Then('I should complete the checkout process', async () => {
  await cartPage.completeCheckout();
});