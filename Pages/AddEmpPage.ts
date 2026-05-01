import { baseClass }  from "./BasePage";
export class AddEmpPage extends baseClass{

    private static addEmpBtn='//input[@value="Add"]';
    private static textEmpName='//input[@name="txtEmpFirstName"]';
    private static textEmpLastName='//input[@name="txtEmpLastName"]';
    private static clickSaveBtn='//input[@id="btnEdit"]';

    static async addEmployee(empName: string, empLastName: string){
        const frame=this.page.frameLocator("#rightMenu");
        await frame.locator(this.addEmpBtn).click();
        await frame.locator(this.textEmpName).fill(empName);
        await frame.locator(this.textEmpLastName).fill(empLastName);
        await frame.locator(this.clickSaveBtn).click();
        console.log("employee added successfully"); 
    }
}