import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) { }

  async verifyItemInCart(itemName: string) {
    await this.page.waitForSelector(`text=${itemName}`);
  }

  async proceedToCheckout() {
    await this.page.click('button[name="checkout"]');
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async completeCheckout() {
    await this.page.click('#finish');
  }
}
