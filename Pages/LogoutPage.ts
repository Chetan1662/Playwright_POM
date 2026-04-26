import { baseClass } from "./BasePage";
export class LogoutPage extends baseClass{
//locators
private static logoutBtn='//a[text()="Logout"]';
static async logout(){
    await this.page.click(this.logoutBtn);
    console.log("logout is successfull");
}
}