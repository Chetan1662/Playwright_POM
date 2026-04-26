import{Page} from '@playwright/test';
export class baseClass{
   public static page: Page;

   static async openApplication(url: string){
    await this.page.goto(url);
    console.log("Application is opened");

   }

}
