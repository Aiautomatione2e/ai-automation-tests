import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('heading', { name: 'New message' }).click();
  await page.getByLabel('New message').getByText('Close').click();
});