import logout from "../utilities/LogOut";
import loginpage from "../utilities/LoginPage";






describe('Logout Test', () => {

    const LoginPage = new loginpage
    const Logout = new logout()
    beforeEach(() => {
        LoginPage.visitLoginPage()
    });
    it('Successfully logs out', () => {

        LoginPage.ValidSignin()
        Logout.Logout()

    })
})