import{test} from '@playwright/test';
import { baseClass } from '../Pages/BasePage';
import { LoginPage } from '../Pages/LoginPage';
import { VerifyPage } from '../Pages/VerifyPage';
import { LogoutPage } from '../Pages/LogoutPage';
test('Login TC001', async ({page})=>{
baseClass.page=page;
await baseClass.openApplication('https://ctcorphyd.com/SureshIT/login.php');
await LoginPage.login('sureshit','sureshit');
await VerifyPage.verifyTitle("SureshIT");
await LogoutPage.logout();

}

)