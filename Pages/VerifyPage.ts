import { baseClass } from "./BasePage";
import { expect, Expect } from "@playwright/test";
export class VerifyPage extends baseClass{
 static async verifyTitle(expectedTitle: string){
    await expect(this.page).toHaveTitle(expectedTitle);
    console.log("title verified");
 }
}