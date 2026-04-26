import { baseClass } from "./BasePage";
export class LoginPage extends baseClass{
 //locators
 private static txtUsername='//input[@name="txtUserName"]';
 private static txtPassword='//input[@name="txtPassword"]';
 private static loginBtn='//input[@type="Submit"]';

 //functions
static async login(username: string, password:string){
await this.page.fill(this.txtUsername,username);
await this.page.fill(this.txtPassword,password);
await this.page.click(this.loginBtn);
console.log("login is successfull");

}

}