import loginpage, { default as signin } from "../utilities/LoginPage"





describe('Invalid Login Tests', () => {

    const LoginPage = new loginpage()

    beforeEach(() => {
        LoginPage.visitLoginPage()
    });

    it('Try log in without username and password', () => {


        LoginPage.InvalidSigninUserPassMiss()


    })

    it('Try log in with wrong username and wrong password', () => {


        LoginPage.InvalidSigninUserPassWrong()


    })
    it('Try log in with wrong password', () => {


        LoginPage.InvalidSigninPassWrong()


    })
    it('Try log in with wrong username', () => {


        LoginPage.InvalidSigninUserWrong()


    })

})