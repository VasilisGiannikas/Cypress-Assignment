import lockunlockaccount from "../utilities/LockUnlockAccount";
import loginpage from "../utilities/LoginPage";






describe('Lock Account Page', () => {

    const LoginPage = new loginpage()
    const LockUnlockAccount = new lockunlockaccount()
    beforeEach(() => {
        LoginPage.visitLoginPage()
        
    });
    it('Lock Account Page', () => {

     LockUnlockAccount.Lockaccount()
     LockUnlockAccount.Taxid()
     LockUnlockAccount.Username()
     LockUnlockAccount.Countryphonecode()
     LockUnlockAccount.Phonenumber()
     LockUnlockAccount.ContinueBlockAccount()   
 

    })

})