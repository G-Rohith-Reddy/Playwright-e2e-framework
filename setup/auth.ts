
import dotenv from 'dotenv';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { chromium, Page } from '@playwright/test';
dotenv.config({path:'./data/.env',override:true})

const authFile = '../data/user.json';

export default async function loginSetup() {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext()
  const page = await context.newPage()
  const loginPage:LoginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  if(process.env.TOREGISTER?.toLocaleLowerCase()==='1true')
    await loginPage.register();
  await loginPage.login();
  const homepage = new HomePage(page);
  await homepage.validateUserTitle()
  await page.context().storageState({ path: authFile });
}