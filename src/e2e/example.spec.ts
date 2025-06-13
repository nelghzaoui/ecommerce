import { test, expect } from '@playwright/test';

test('homepage has title and link to features', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Angular/i);
  await expect(page.getByText('Features')).toBeVisible();
});
