import lockunlockaccount from "../utilities/LockUnlockAccount";
import loginpage from "../utilities/LoginPage";






describe('UnLock Account Page', () => {

    const LoginPage = new loginpage()
    const LockUnlockAccount = new lockunlockaccount()
    beforeEach(() => {
        LoginPage.visitLoginPage()
        
    });
    it('unLock Account Page', () => {

     LockUnlockAccount.UnLockaccount()
     LockUnlockAccount.Taxid()
     LockUnlockAccount.Username()
     LockUnlockAccount.Countryphonecode()
     LockUnlockAccount.Phonenumber()
     LockUnlockAccount.ContinueUnBlockAccount() 
 

    })

})