import { expect } from '@playwright/test';

export class LoginModal {
    constructor(page) {
        this.page = page;
        this.username = this.page.locator('#loginusername');
        this.password = this.page.locator('#loginpassword');
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });
        this.modal = this.page.locator('.modal-dialog, .modal-content, [role="dialog"]');
    }

    async waitForModal() {
        await this.modal.first().waitFor({ state: 'visible' });
    }

    async enterUsername() {
        await this.waitForModal();
        await this.username.waitFor({ state: 'visible' });
        await this.username.fill('rakshith.ofc17@gmail.com');
    }

    async enterPassword() {
        await this.password.fill('InfyRbs@23');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async loginToEcommerce() {
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLogin();
    }
}