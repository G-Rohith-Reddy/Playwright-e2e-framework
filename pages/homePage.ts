import { Page, expect } from "@playwright/test"
import { BasePage, SelectorType } from './basePage';

export class HomePage extends BasePage
{
    constructor(page:Page)
    {
        super(page)
    }
    constants= {
        title:"Welcome rohith"
    }
    private UserTitle = 'h1.title'
    
    public async validateUserTitle() {
        await expect(await this.getElement(this.UserTitle)).toContainText(this.UserTitle)
    }
}
