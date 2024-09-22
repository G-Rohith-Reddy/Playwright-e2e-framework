import test from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

let loginPage:LoginPage;
let homePage: HomePage
test('Login Test',async ({page}) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await homePage.validateUserTitle()
})