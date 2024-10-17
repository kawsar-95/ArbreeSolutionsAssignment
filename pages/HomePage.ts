import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async addItemToCart(itemName: string) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('button[name="add-to-cart"]');
  }

  async navigateToCart() {
    await this.page.click('#shopping_cart_container');
  }
}
