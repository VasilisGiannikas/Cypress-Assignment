import forgotuserpass from "../utilities/ForgotUserPass";
import loginpage from "../utilities/LoginPage";

describe('Forgot Password Page', () => {
  
    const LoginPage = new loginpage()
    const ForgotUserPass = new forgotuserpass()
    beforeEach(() => {
      LoginPage.visitLoginPage()
      
    });
    
    it('Forgot Password Page Individual', () => {
        let ignoreUncaughtException = false;

        Cypress.on('uncaught:exception', (err, runnable) => {
            if (ignoreUncaughtException && err.message.includes('Syntax error, unrecognized expression: #')) {
                // Ignore only the specific exception
                return false;
            }
            // Throw all other errors
            throw err;
        });

        // Interactions before the surname field
        ForgotUserPass.Forgotpass();
        ForgotUserPass.Individual();
        ForgotUserPass.Username();
        ForgotUserPass.Name();
        // Enable ignoring uncaught exceptions for the surname interaction
        ignoreUncaughtException = true;
        // Interaction with the surname field
        ForgotUserPass.Surname();
        ForgotUserPass.UserTaxId()
        ForgotUserPass.UserID()
        ForgotUserPass.Address()
        ForgotUserPass.AddressNumber()
        ForgotUserPass.TK()
        ForgotUserPass.BirthDay()
        ForgotUserPass.Birthmonth()
        ForgotUserPass.Birthyear()
        ForgotUserPass.Countryphonecode()
        ForgotUserPass.IndividualPhonenumber()
        ForgotUserPass.ContinueIndividual()
    });
    
    
    it.only('Forgot Password Page Individual', () => {
        let ignoreUncaughtException = false;

        Cypress.on('uncaught:exception', (err, runnable) => {
            if (ignoreUncaughtException && err.message.includes('Syntax error, unrecognized expression: #')) {
                // Ignore only the specific exception
                return false;
            }
            // Throw all other errors
            throw err;
        });
        ignoreUncaughtException = true;
        ForgotUserPass.Forgotpass();
        ForgotUserPass.legalentity()
        ForgotUserPass.Username();
        ForgotUserPass.CompanyName()
        ForgotUserPass.CompanyTaxId()
        ForgotUserPass.Gemi()
        ForgotUserPass.LegalAddress()
        ForgotUserPass.LegalAddressNumber()
        ForgotUserPass.LegalTK()
        ForgotUserPass.LegalBirthDay()
        ForgotUserPass.LegalBirthmonth()
        ForgotUserPass.LegalBirthyear()
        ForgotUserPass.LegalCountryphonecode()
        ForgotUserPass.legalPhonenumber()
        ForgotUserPass.LegalContinue()

    })
    })