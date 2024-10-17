import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test.describe('Checkout Item Test', () => {
  test('should complete checkout process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Login as standard_user
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Add items to the cart
    await homePage.addItemToCart('Sauce Labs Backpack');

    // Step 4: Verify the correct items were added to the cart
    await homePage.navigateToCart();
    await cartPage.verifyItemInCart('Sauce Labs Backpack');

    // Step 5: Complete the checkout process
    await cartPage.proceedToCheckout();
    await cartPage.fillCheckoutDetails('John', 'Doe', '12345');
    await cartPage.completeCheckout();
  });
});
