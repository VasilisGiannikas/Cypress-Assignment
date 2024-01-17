import deposits from "../utilities/Deposits";
import loginpage from "../utilities/LoginPage";






describe('Accounts test', () => {

    const LoginPage = new loginpage()
    const Deposits = new deposits()
    beforeEach(() => {
        LoginPage.visitLoginPage()
        LoginPage.ValidSignin()
        Deposits.depositsmenuclick()
        Deposits.depositsAccounts()
    });
    it('Successfully goes to accounts and accounts are visible in both Tamieutirio and Opseos', () => {

    
        Deposits.AccountTamieutirioVisible()
        Deposits.AccountOpseosclick()
        Deposits.AccountOpseosVisible()


    })

it('Tamieutirio copy to clipboard and settings', () => {

    
    Deposits.TamieutirioClick()
    Deposits.Copytoclipbard()
    Deposits.accountSettings()
    Deposits.Colorcheck()
    Deposits.Namecheck()
    Deposits.ContinueClick()
    Deposits.depositsmenuclick()
    Deposits.depositsAccounts()
    Deposits.ValidateNameAndColor()
    Deposits.accountSettings()
    Deposits.ChangeBackNameColor()
    Deposits.ContinueClick()
    Deposits.depositsmenuclick()
    Deposits.depositsAccounts()
    Deposits.AccountTamieutirioVisible()
})
it('Opseos copy to clipboard and settings', () => {

    
    Deposits.AccountOpseosclick()
    Deposits.CopytoclipbardOpseos()
    Deposits.accountSettingsOpseos()
    Deposits.Colorcheck()
    Deposits.NamecheckOPSEOS()
    Deposits.ContinueClick()
    Deposits.depositsmenuclick()
    Deposits.depositsAccounts()
    Deposits.AccountOpseosclick()
    Deposits.ValidateNameAndColor()
    Deposits.accountSettingsOpseos()
    Deposits.ChangeBackNameColorOpseos()
    Deposits.ContinueClick()
    Deposits.depositsmenuclick()
    Deposits.depositsAccounts()
    Deposits.AccountOpseosclick()
    Deposits.AccountOpseosVisible()
})
it('Account Tamieutirio setting', () => {
 
    Deposits.TamieutirioClick()
    Deposits.TamieutirioAccountClick()
    Deposits.ClickMore()
    Deposits.KlimakesEpitokiou()
    Deposits.Dikaiouxoi()
    Deposits.VevaiwsitirisisAccount()
    Deposits.ValidateMonthAnalisis()
    Deposits.ExcelDownload()
    Deposits.PdfDownload()
    Deposits.Print()
    Deposits.ValidateTransactions()
    Deposits.SinallagesAnazitisi()
    Deposits.ValidateTransactions()
    Deposits.ClickRefreshMonthlyAnalisis()



})
})