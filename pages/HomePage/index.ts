import {expect, Page} from '@playwright/test';

export class HomePage {
    private signupLink = this.page.locator('#signin2');
    private loginLink = this.page.locator('#login2');

    constructor(protected page: Page) {}

    public async clickSignUpLink(): Promise<void> {
        await this.signupLink.click();
    };

    public async clickLoginLink(): Promise<void> {
        await this.loginLink.click();
    }
}  