import { Page } from "@playwright/test"
import { BasePage } from './basePage';

class Locators
{
    RegisterLink = 'a[href="register.htm"]'
    firstName ='//input[@id="customer.firstName"]'
    lasttName = '//input[@id="customer.lastName"]'
    address = '//input[@id="customer.address.street"]'
    city = '//input[@id="customer.address.city"]'
    state = '//input[@id="customer.address.state"]'
    zipcode = '//input[@id="customer.address.zipCode"]'
    ssnNumber = '//input[@id="customer.ssn"]'
    userNameRegister = '//input[@id="customer.username"]'
    passwordRegister = '//input[@id="customer.password"]'
    confirmPassword = '#repeatedPassword'
    Registerbutton = 'input[value="Register"]'
    
    UsernameField = 'input[name="username"]';
    PasswordField = 'input[type="password"]'
    SigninButton = 'input[type="submit"]'
}
export class LoginPage extends BasePage
{
    readonly locators:Locators;
    constructor(page:Page)
    {
        super(page)
        this.locators = new Locators()
    }

    public async gotoLoginPage()
    {

        const pageURL = process.env.BASEURL
        if(pageURL)
            await this.gotoPage(pageURL)
        await this.waitForPageLoad();
    }
    private password = btoa(process.env.PASSWORD||'')

    public async register()
    {
        await this.clickElement(this.locators.RegisterLink);
        await this.WriteText(this.locators.firstName, undefined,process.env.FIRSTNAME)
        await this.WriteText(this.locators.lasttName, undefined,process.env.LASTNAME)
        await this.WriteText(this.locators.address, undefined,process.env.ADDRESS)
        await this.WriteText(this.locators.city, undefined,process.env.CITY)
        await this.WriteText(this.locators.state, undefined,process.env.STATE)
        await this.WriteText(this.locators.zipcode, undefined,process.env.ZIP)
        await this.WriteText(this.locators.ssnNumber, undefined,process.env.SSN)
        await this.WriteText(this.locators.userNameRegister, undefined,process.env.USERNAME)
        await this.WriteText(this.locators.passwordRegister, undefined,this.password)
        await this.WriteText(this.locators.confirmPassword, undefined,this.password)
        await this.clickElement(this.locators.Registerbutton)
    }
    public async login()
    {
        await this.WriteText(this.locators.UsernameField,undefined,process.env.USERNAME??'')
        const password = atob(process.env.PASSWORD||'',)
        console.log('password is'+password)
        await this.WriteText(this.locators.PasswordField,undefined,password)
        await this.clickElement(this.locators.SigninButton)
        await this.waitForPageLoad();
    }
}