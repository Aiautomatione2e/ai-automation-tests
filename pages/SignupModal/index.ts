import {expect, Page} from '@playwright/test';


export class SignupModal {
    private username = this.page.locator('#sign-username');
    private password = this.page.locator('#sign-password');
    private signupButton = this.page.getByRole('button', { name: 'Sign up' });

    constructor(protected page: Page) {}

    public async enterUsername(): Promise<void> {
        await this.username.fill('rakshith.ofc17@gmail.com');
    };

    public async enterPassword(): Promise<void> {
        await this.password.fill('ecom@123');
    };

    public async clickSignup(): Promise<void> {
        await this.signupButton.click();
    };

    public async signupToEcommerce(): Promise<void> {
        await this.enterUsername();
        await this.enterPassword();
        await this.clickSignup();   
    };
}  