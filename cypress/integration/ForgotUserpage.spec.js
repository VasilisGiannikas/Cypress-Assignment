import { default as forgotuserpass } from "../utilities/ForgotUserPass"
import { default as loginpage } from "../utilities/LoginPage"



describe('Forgot UserName Page', () => {

  const LoginPage = new loginpage()
  const ForgotUserPass = new forgotuserpass()
  beforeEach(() => {
    LoginPage.visitLoginPage()
  });
  it('Forgot UserName Page', () => {

    ForgotUserPass.Forgotusername()
    ForgotUserPass.Taxid()
    ForgotUserPass.Countrycode()
    ForgotUserPass.Phonenumber()
    ForgotUserPass.Continue()

  })
 
})