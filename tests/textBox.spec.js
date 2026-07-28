import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test('User can fill and submit the Text Box form', async ({ page }) => {

    const textBoxPage = new TextBoxPage(page);

    await page.goto('https://demoqa.com/text-box');

    await textBoxPage.fillFullName('Deborah Feitosa');
    await textBoxPage.fillEmail('deborah.feitosa@example.com');
    await textBoxPage.fillCurrentAddress('Rua Test1, Lisboa');
    await textBoxPage.fillPermanentAddress('Rua Test2, Lisboa');

    await textBoxPage.clickSubmit();

    await page.waitForTimeout(2000);
});