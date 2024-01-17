import deposits from "../utilities/Deposits";
import loginpage from "../utilities/LoginPage";
import transactions from "../utilities/Transactions";






describe('Logout Test', () => {

    const LoginPage = new loginpage
    const Transactions = new transactions
    const Deposits = new deposits
    beforeEach(() => {
        LoginPage.visitLoginPage()
        LoginPage.ValidSignin()
        
        
    });
    it.only('Metafores se Logariasmo M', () => {
        Transactions.TransactionsClick()
        Transactions.MetaforesClick()
        Transactions.MetaforesLogariasmoM()
        Transactions.Transactionfrmmetome()
         
      


    })

it('Metafores se Logariasmo M apothikeusi prototipo', () => {
    Transactions.TransactionsClick()
    Transactions.MetaforesClick()
    Transactions.MetaforesLogariasmoM()
    Transactions.Prototypesave()
    
     
  


})
})