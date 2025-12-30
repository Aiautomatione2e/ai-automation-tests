import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

import { LoginModal } from '../pages/LoginModal';

let homePage : HomePage;
let loginModal : LoginModal;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginModal = new LoginModal(page);
    await page.goto('https://www.demoblaze.com/index.html');
});

test.describe('login up to ecommerce site', () => {
    test.only('Verify login to ecommerce site', async ({page}) => {
       await homePage.clickLoginLink();
       await page.pause();
       await loginModal.loginToEcommerce();
    });
  });