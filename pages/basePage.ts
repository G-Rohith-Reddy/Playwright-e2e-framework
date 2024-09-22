import { Locator, Page } from "@playwright/test";
import { Roles, isRole } from '../helpers/types';

export class BasePage
{
    protected page: Page;
    constructor(page: Page)
    {
        this.page = page;
    }


    protected async gotoPage(pageURL:string)
    {
        await this.page.goto(pageURL)
    }

    protected async waitForPageLoad(type?:"load" | "domcontentloaded" | "networkidle")
    {
        await this.page.waitForLoadState(type)

    }
    protected async getElement(arg1: SelectorType |string| Roles, arg2? : string |Record<string,any>,nthElement?:number):Promise<Locator> 
    {
        nthElement=nthElement||0        
        if(typeof arg1==='number'&& typeof arg2==='string')
            return (await this.getElementBy(arg1,arg2)).nth(nthElement)
        else if(typeof arg1==='string' && isRole(arg1) && typeof arg2==='object')
            return await this.page.getByRole(arg1,arg2).first().nth(nthElement)
        else 
            return (await this.getElementBy(SelectorType.Locator,arg1 as string)).nth(nthElement)

    }

    protected async getAllElements(arg1: SelectorType | Roles|string, arg2? : string |Record<string,any>):Promise<Locator> 
    {
        if(typeof arg1==='number'&& typeof arg2==='string')
            return (await this.getElementBy(arg1,arg2))
        else if(typeof arg1==='string' && isRole(arg1) && typeof arg2==='object')
            return await this.page.getByRole(arg1,arg2).first()
        else 
            return (await this.getElementBy(SelectorType.Locator,arg1 as string))
    }

    private async getElementBy(type:SelectorType, locator:string):Promise<Locator>
    {
        let element:Locator;
        switch(type)
        {
            case SelectorType.Label :
                element = await this.page.getByLabel(locator);
                break;
            case SelectorType.Text:
                element = await this.page.getByText(locator);
                break;
            case SelectorType.AltText:
                element = await this.page.getByAltText(locator);
                break;
            case SelectorType.Placeholder:
                element =  await this.page.getByPlaceholder(locator);
                break;
            case SelectorType.Title:
                element = await this.page.getByTitle(locator);
                break;
            case SelectorType.TestId:
                element = await this.page.getByTestId(locator)
                break
            case SelectorType.Locator:
                element = await this.page.locator(locator);
                break
        }
        return element;
    }

    protected async clickElement(arg1:Roles | SelectorType | Locator | string, arg2? : string |{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            await (await this.getElement(arg1,arg2)).click();
        else 
            await arg1.click()
    }
    
    protected async selectCheckbox(arg1: SelectorType | Roles|Locator|string,arg2:string|{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return await (await this.getElement(arg1,arg2)).check();
        else 
            await arg1.check()
        
    }

    protected async WriteText(arg1: SelectorType | Roles|Locator|string,arg2?:string|{},text?:string)
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getElement(arg1,arg2)).fill(text||"null");
        else 
            return await arg1.fill(text||"null")
    }
    
    protected async readText(arg1: SelectorType | Roles|Locator|string,arg2?:string|{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getElement(arg1,arg2)).textContent()
        else 
            return await arg1.textContent()
    }
    protected async readInnerText(arg1: SelectorType | Roles|Locator|string,arg2?:string|{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getElement(arg1,arg2)).innerText()
        else 
            return await arg1.innerText()
    }
    protected async readInnerHTML(arg1: SelectorType | Roles|Locator|string,arg2?:string|{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getElement(arg1,arg2)).innerHTML()
        else 
            return await arg1.innerHTML()
    }

    protected async readAllElements(arg1: SelectorType | Roles|Locator|string,arg2?:string|{})
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getAllElements(arg1,arg2)).allInnerTexts();
        else 
            return await arg1.allInnerTexts() 
    }

    protected async isElementDisplayed(arg1: SelectorType | Roles|Locator|string,arg2?:string|{}):Promise<boolean>
    {
        if(typeof arg1 ==='string'|| typeof arg1 ==='number')
            return (await this.getElement(arg1,arg2)).isVisible()
        else 
            return await arg1.isVisible();
    }
}

export enum SelectorType
{
    Label,
    Text,
    AltText,
    Placeholder,
    Title,
    TestId,
    Locator,
}
//module.exports = {BasePage}