import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupModal } from '../pages/SignupModal';

let homePage : HomePage;
let signupModal : SignupModal;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupModal = new SignupModal(page);
    await page.goto('https://www.demoblaze.com/index.html');
});

test.describe('Sign up to ecommerce site', () => {
    test('Verify sign up to ecommerce site', async ({page}) => {
       await homePage.clickSignUpLink();
       await signupModal.signupToEcommerce();
    });
  });