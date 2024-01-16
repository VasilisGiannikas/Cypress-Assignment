import loginpage, { default as signin } from "../utilities/LoginPage"





describe('Login Test', () => {

    const LoginPage = new loginpage()
    beforeEach(() => {
        LoginPage.visitLoginPage()
    });
    it('Successfully logs in with username and password', () => {

        LoginPage.ValidSignin()

    })
})