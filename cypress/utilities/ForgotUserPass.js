
class forgotuserpass {
    Forgotusername() {

            cy.get('[href="/el/Account/ForgotUsername"] > small').click()
            cy.url().should("contain", "/ForgotUsername")
            cy.get('h5.mb-4').should('contain', 'Υπενθύμιση ονόματος χρήστη')//label validate
            cy.get('#forgot-username-step-2-continue').click()
            cy.get('#parsley-id-5').should('contain', 'Το πεδίο του ΑΦΜ είναι υποχρεωτικό.')
            cy.get('#parsley-id-7').should('contain', 'Το πεδίο του κωδικού χώρας είναι υποχρεωτικό.')
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του κινητού είναι υποχρεωτικό.')


    }
    Taxid() {
        cy.fixture('User.json').then((User) => {
            const lettersTaxid = User.LettersTaxid
            const numbersTaxidlessthan9 = User.NumbersTaxidlessthan9
            const numbersTaxid = User.NumbersTaxid
            const rightnumbersTaxid = User.RightNumbersTaxid
            cy.get('[name="cardNumber"]').should('have.attr', 'required')
            cy.get('[name="cardNumber"]').invoke('attr', 'data-parsley-minlength').should('eq', '9');
            cy.get('[name="cardNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="cardNumber"]').type(numbersTaxidlessthan9)
            cy.get('#parsley-id-5').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται από τουλάχιστον 9 ψηφία.')
            cy.get('[name="cardNumber"]').clear().type(lettersTaxid)
            cy.get('#parsley-id-5').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="cardNumber"]').clear().type(numbersTaxid)
            cy.get('#parsley-id-5').should('contain', 'Το ΑΦΜ που πληκτρολογήσατε δεν είναι έγκυρο.')
            cy.get('[name="cardNumber"]').clear().type(rightnumbersTaxid)



        })
    }
    Countrycode() {
        cy.fixture('User.json').then((User) => {
            const letterscountrycode = User.Letterscountrycode
            const numberscountrycode = User.Numberscountrycode
            const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
            cy.get('[name="CountryPhoneCode"]').should('have.attr', 'required')
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-minlength').should('eq', '3');
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-maxlength').should('eq', '5');
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="CountryPhoneCode"]').type(letterscountrycode)
            cy.get('#parsley-id-7').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="CountryPhoneCode"]').clear().type(lessthan3Numberscountrycode)
            cy.get('#parsley-id-7').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να έχει τουλάχιστον 3 ψηφία.')
            cy.get('[name="CountryPhoneCode"]').clear().type(numberscountrycode)

        })
    }

    Phonenumber() {
        cy.fixture('User.json').then((User) => {

            const phonenumberletters = User.Phonenumberletters
            const numbersPhonenumber = User.NumbersPhonenumber
            const lessNumbersPhonenumber = User.LessNumbersPhonenumber

            cy.get('[name="PhoneNumber"]').should('have.attr', 'required')
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-minlength').should('eq', '10');
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-maxlength').should('eq', '15');
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="PhoneNumber"]').type(phonenumberletters)
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="PhoneNumber"]').clear().type(lessNumbersPhonenumber)
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να έχει τουλάχιστον 10 ψηφία.')
            cy.get('[name="PhoneNumber"]').clear().type(numbersPhonenumber)


        })
    }
    Continue() {
        cy.get('#forgot-username-step-2-continue').click()
        cy.get('.text-error').should('contain', 'Ανεπιτυχής προσπάθεια υπενθύμισης username!')
    }


    Forgotpass(){
        cy.get('[href="/el/Account/ForgotPassword"] > small').click()
        cy.url().should("contain", "/ForgotPassword")
        cy.get('h5.mb-4').should('contain','Επανέκδοση κωδικού χρήστη')

    }
    Individual(){
        cy.get('label.custom-radio').contains('Νομικά πρόσωπα και επιχειρήσεις').click();
        cy.get('label.custom-radio').contains('Φυσικά πρόσωπα και ιδώτες').click();
        cy.get('input[type="radio"][value="individual"]').should('be.checked')
        cy.get('#forgot-password-continue').click()
        cy.url().should("contain", "/ReissuePasswordIndividual")
        cy.get('h5.mb-4').should('contain','Επανέκδοση κωδικού χρήστη')
        cy.get('#reissue-password-individual-step-2-continue').click()
       

    }
    Username(){
        cy.fixture('User.json').then((User) => {
            const username = User.Username
            cy.get('#parsley-id-5').should('contain','Το πεδίο του ονόματος χρήστη είναι υποχρεωτικό.')
            cy.get('[name="username"]').should('have.attr', 'required')
            cy.get('[name="username"]').type(username)
            cy.get('#parsley-id-5').should('not.be.visible');

    })
}
    Name(){
        cy.fixture('User.json').then((User) => {
            const name = User.Name
            cy.get('#parsley-id-7').should('contain','Το πεδίο του ονόματος είναι υποχρεωτικό.')
            cy.get('[name="firstName"]').should('have.attr', 'required')
            cy.get('[name="firstName"]').type(name)
            cy.get('#parsley-id-7').should('not.be.visible');

})
    }
    Surname(){
        cy.fixture('User.json').then((User) => {
           
            const surname = User.Surname
            cy.get('#parsley-id-9').should('contain','Το πεδίο του επωνύμου είναι υποχρεωτικό.')
            cy.get('[name="lastName"]').should('have.attr', 'required')
            cy.get('[name="lastName"]').type(surname)
            cy.get('#parsley-id-9').should('not.be.visible')

})
    }
    UserTaxId(){
        
            cy.fixture('User.json').then((User) => {
                const lettersTaxid = User.LettersTaxid
                const numbersTaxidlessthan9 = User.NumbersTaxidlessthan9
                const numbersTaxid = User.NumbersTaxid
                const rightnumbersTaxid = User.RightNumbersTaxid
                cy.get('#parsley-id-11').should('contain', 'Το πεδίο του ΑΦΜ είναι υποχρεωτικό.')
                cy.get('[name="tIN"]').should('have.attr', 'required')
                cy.get('[name="tIN"]').invoke('attr', 'data-parsley-minlength').should('eq', '9');
                cy.get('[name="tIN"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
                cy.get('[name="tIN"]').type(numbersTaxidlessthan9)
                cy.get('#parsley-id-11').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται από τουλάχιστον 9 ψηφία.')
                cy.get('[name="tIN"]').clear().type(lettersTaxid)
                cy.get('#parsley-id-11').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται μόνο από ψηφία.')
                cy.get('[name="tIN"]').clear().type(numbersTaxid)
                cy.get('#parsley-id-11').should('contain', 'Το ΑΦΜ που πληκτρολογήσατε δεν είναι έγκυρο.')
                cy.get('[name="tIN"]').clear().type(rightnumbersTaxid)
                cy.get('#parsley-id-11').should('not.be.visible')
    
    
            })
        }
        UserID(){
            cy.fixture('User.json').then((User) => {
               const idlessthan3 = User.Idlesstha3
               const id = User.ID
               cy.get('#parsley-id-13').should('contain', 'Το πεδίο του αριθμού ταυτότητας είναι υποχρεωτικό.')
               cy.get('[name="identification"]').should('have.attr', 'required')
               cy.get('[name="identification"]').invoke('attr', 'data-parsley-minlength').should('eq', '3');
               cy.get('[name="identification"]').type(idlessthan3)
               cy.get('#parsley-id-13').should('contain', 'Το πεδίο του αριθμού ταυτότητας πρέπει να αποτελείται από τουλάχιστον 3 χαρακτήρες.')
               cy.get('[name="identification"]').clear().type(id)
               cy.get('#parsley-id-13').should('not.be.visible')


            })
        }
            Address(){
                cy.fixture('User.json').then((User) => {
                const address = User.Address 
                
                cy.get('#parsley-id-15').should('contain', 'Το πεδίο της οδού είναι υποχρεωτικό.')
                cy.get('[name="addressStreet"]').should('have.attr', 'required')
                cy.get('[name="addressStreet"]').type(address)
                cy.get('#parsley-id-15').should('not.be.visible')
            })
        

        }
        AddressNumber(){
            cy.fixture('User.json').then((User) => {
            const addressnumber = User.Addressnumber
            const addressnumberletters = User.lettersAddressnumber
            cy.get('#parsley-id-17').should('contain', 'Το πεδίο του αριθμού της οδού είναι υποχρεωτικό.')
            cy.get('[name="addressNumber"]').should('have.attr', 'required')
            cy.get('[name="addressNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="addressNumber"]').type(addressnumberletters)
            cy.get('#parsley-id-17').should('contain', 'Το πεδίο του αριθμού της οδού πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="addressNumber"]').clear().type(addressnumber)
            cy.get('#parsley-id-17').should('not.be.visible')
        })
    

    }
    TK() {
        cy.fixture('User.json').then((User) => {
            const letterscountrycode = User.Letterscountrycode
            const numberscountrycode = User.Numberscountrycode
            const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
            cy.get('#parsley-id-19').should('contain', 'Το πεδίο του τ.κ. είναι υποχρεωτικό.')
            cy.get('[name="addressZipCode"]').should('have.attr', 'required')
            cy.get('[name="addressZipCode"]').invoke('attr', 'data-parsley-length').should('eq', '[5,5]');
            cy.get('[name="addressZipCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="addressZipCode"]').type(letterscountrycode)
            cy.get('#parsley-id-19').should('contain', 'Το πεδίο του τ.κ. πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="addressZipCode"]').clear().type(lessthan3Numberscountrycode)
            cy.get('#parsley-id-19').should('contain', 'Το πεδίο του  τ.κ. πρέπει να αποτελείται από 5 ψηφία.')
            cy.get('[name="addressZipCode"]').clear().type(numberscountrycode)
            cy.get('#parsley-id-19').should('not.be.visible')

        })
    }
    BirthDay() {
        cy.fixture('User.json').then((User) => {
      
            const birthdayletters = User.BirthDayletters
            const birthdaywrong = User.BirthDayWRONG
            const birthday = User.BirthDay
           const birthday1number = User.BirthDay1number
            cy.get('#parsley-id-21').should('contain', 'Το πεδίο της ημέρας είναι υποχρεωτικό.')
            cy.get('[name="day"]').should('have.attr', 'required')
            cy.get('[name="day"]').invoke('attr', 'data-parsley-length').should('eq', '[2,2]');
            cy.get('[name="day"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="day"]').invoke('attr', 'data-parsley-max').should('eq', '31');
            cy.get('[name="day"]').type(birthdayletters)
            cy.get('#parsley-id-21').should('contain', 'Το πεδίο της ημέρας πρέπει να περιέχει μόνο ψηφία.')
            cy.get('[name="day"]').clear().type(birthdaywrong)
            cy.get('#parsley-id-21').should('contain', 'Το πεδίο της ημέρας πρέπει να είναι μικρότερο ή ίσο με το 31.')
            cy.get('[name="day"]').clear().type(birthday1number)
            cy.get('#parsley-id-21').should('contain', 'Το πεδίο της ημέρας πρέπει να αποτελείται ακριβώς από 2 ψηφία.')
            cy.get('[name="day"]').clear().type(birthday)
            cy.get('#parsley-id-21').should('not.be.visible')

        })
    }
    Birthmonth() {
        cy.fixture('User.json').then((User) => {
      
            const birthmonthletters = User.BirthMonthletters
            const birthmonthwrong = User.BirthMonth2numberover12
            const birthmonth = User.BirthMonthr
           const birthmonth1number = User.BirthMonth1number
            cy.get('#parsley-id-23').should('contain', 'Το πεδίο του μήνα είναι υποχρεωτικό.')
            cy.get('[name="month"]').should('have.attr', 'required')
            cy.get('[name="month"]').invoke('attr', 'data-parsley-length').should('eq', '[2,2]');
            cy.get('[name="month"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="month"]').invoke('attr', 'data-parsley-max').should('eq', '12');
            cy.get('[name="month"]').type(birthmonthletters)
            cy.get('#parsley-id-23').should('contain', 'Το πεδίο του μήνα πρέπει να περιέχει μόνο ψηφία.')
            cy.get('[name="month"]').clear().type(birthmonthwrong)
            cy.get('#parsley-id-23').should('contain', 'Το πεδίο του μήνα πρέπει να είναι μικρότερο ή ίσο με το 12.')
            cy.get('[name="month"]').clear().type(birthmonth1number)
            cy.get('#parsley-id-23').should('contain', 'Το πεδίο του μήνα πρέπει να αποτελείται ακριβώς από 2 ψηφία.')
            cy.get('[name="month"]').clear().type(birthmonth)
            cy.get('#parsley-id-23').should('not.be.visible')

        })
    }
    Birthyear() {
        cy.fixture('User.json').then((User) => {
      
            const birthyearletters = User.Birthyearletters
            const birthyearwrong = User.Birthyearmorethan2024
            const birthyear = User.Birthyear
           const birthyear1number = User.Birthyearlessthan4
            cy.get('#parsley-id-25').should('contain', 'Το πεδίο του έτους είναι υποχρεωτικό.')
            cy.get('[name="year"]').should('have.attr', 'required')
            cy.get('[name="year"]').invoke('attr', 'data-parsley-length').should('eq', '[4,4]');
            cy.get('[name="year"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="year"]').invoke('attr', 'data-parsley-max').should('eq', '2024');
            cy.get('[name="year"]').type(birthyearletters)
            cy.get('#parsley-id-25').should('contain', 'Το πεδίο του έτους πρέπει να περιέχει μόνο ψηφία.')
            cy.get('[name="year"]').clear().type(birthyearwrong)
            cy.get('#parsley-id-25').should('contain', 'Το πεδίο του έτους πρέπει να είναι μικρότερο ή ίσο με το 2024.')
            cy.get('[name="year"]').clear().type(birthyear1number)
            cy.get('#parsley-id-25').should('contain', 'Το πεδίο του έτους πρέπει να αποτελείται ακριβώς από 4 ψηφία.')
            cy.get('[name="year"]').clear().type(birthyear)
            cy.get('#parsley-id-25').should('not.be.visible')

        })
    }
    Countryphonecode() {
        cy.fixture('User.json').then((User) => {
            const letterscountrycode = User.Letterscountrycode
            const numberscountrycode = User.Numberscountrycode
            const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
            cy.get('[name="CountryPhoneCode"]').should('have.attr', 'required')
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-minlength').should('eq', '3');
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-maxlength').should('eq', '5');
            cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="CountryPhoneCode"]').type(letterscountrycode)
            cy.get('#parsley-id-27').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="CountryPhoneCode"]').clear().type(lessthan3Numberscountrycode)
            cy.get('#parsley-id-27').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να έχει τουλάχιστον 3 ψηφία.')
            cy.get('[name="CountryPhoneCode"]').clear().type(numberscountrycode)
            cy.get('#parsley-id-27').should('not.be.visible')
        })
    }
    IndividualPhonenumber() {
        cy.fixture('User.json').then((User) => {

            const phonenumberletters = User.Phonenumberletters
            const numbersPhonenumber = User.NumbersPhonenumber
            const lessNumbersPhonenumber = User.LessNumbersPhonenumber

            cy.get('[name="PhoneNumber"]').should('have.attr', 'required')
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-minlength').should('eq', '10');
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-maxlength').should('eq', '15');
            cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="PhoneNumber"]').type(phonenumberletters)
            cy.get('#parsley-id-29').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="PhoneNumber"]').clear().type(lessNumbersPhonenumber)
            cy.get('#parsley-id-29').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να έχει τουλάχιστον 10 ψηφία.')
            cy.get('[name="PhoneNumber"]').clear().type(numbersPhonenumber)
            cy.get('#parsley-id-29').should('not.be.visible')

        })
    }
    ContinueIndividual(){
        cy.get('#forgot-username-step-2-continue').click()
        cy.get('.text-error').should('contain', 'Τα στοιχεία δεν μπορούν να επαληθευτούν!')
    }

    legalentity(){
        cy.get('label.custom-radio').contains('Νομικά πρόσωπα και επιχειρήσεις').click();
        cy.get('input[type="radio"][value="legalentity"]').should('be.checked')
        cy.get('#forgot-password-continue').click()
        cy.url().should("contain", "/ReissuePasswordLegal")
        cy.get('h5.mb-4').should('contain','Επανέκδοση κωδικού χρήστη')
        cy.get('#reissue-password-legal-step-2-continue').click()
       

    }
    CompanyName(){
        cy.fixture('User.json').then((User) => {
            const name = User.Name
            cy.get('#parsley-id-7').should('contain','Το πεδίο της επωνυμίας επιχείρησης είναι υποχρεωτικό.')
            cy.get('[name="firstName"]').should('have.attr', 'required')
            cy.get('[name="firstName"]').type(name)
            cy.get('#parsley-id-7').should('not.be.visible');

})
    }
    CompanyTaxId(){
        
        cy.fixture('User.json').then((User) => {
            const lettersTaxid = User.LettersTaxid
            const numbersTaxidlessthan9 = User.NumbersTaxidlessthan9
            const numbersTaxid = User.NumbersTaxid
            const rightnumbersTaxid = User.RightNumbersTaxid
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του ΑΦΜ είναι υποχρεωτικό.')
            cy.get('[name="tIN"]').should('have.attr', 'required')
            cy.get('[name="tIN"]').invoke('attr', 'data-parsley-minlength').should('eq', '9');
            cy.get('[name="tIN"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
            cy.get('[name="tIN"]').type(numbersTaxidlessthan9)
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται από τουλάχιστον 9 ψηφία.')
            cy.get('[name="tIN"]').clear().type(lettersTaxid)
            cy.get('#parsley-id-9').should('contain', 'Το πεδίο του ΑΦΜ πρέπει να αποτελείται μόνο από ψηφία.')
            cy.get('[name="tIN"]').clear().type(numbersTaxid)
            cy.get('#parsley-id-9').should('contain', 'Το ΑΦΜ που πληκτρολογήσατε δεν είναι έγκυρο.')
            cy.get('[name="tIN"]').clear().type(rightnumbersTaxid)
            cy.get('#parsley-id-9').should('not.be.visible')


        })
    }
    LegalAddress(){
        cy.fixture('User.json').then((User) => {
        const address = User.Address 
        
        cy.get('#parsley-id-13').should('contain', 'Το πεδίο της οδού είναι υποχρεωτικό.')
        cy.get('[name="addressStreet"]').should('have.attr', 'required')
        cy.get('[name="addressStreet"]').type(address)
        cy.get('#parsley-id-13').should('not.be.visible')
    })


}
LegalAddressNumber(){
    cy.fixture('User.json').then((User) => {
    const addressnumber = User.Addressnumber
    const addressnumberletters = User.lettersAddressnumber
    cy.get('#parsley-id-15').should('contain', 'Το πεδίο του αριθμού της οδού είναι υποχρεωτικό.')
    cy.get('[name="addressNumber"]').should('have.attr', 'required')
    cy.get('[name="addressNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="addressNumber"]').type(addressnumberletters)
    cy.get('#parsley-id-15').should('contain', 'Το πεδίο του αριθμού της οδού πρέπει να αποτελείται μόνο από ψηφία.')
    cy.get('[name="addressNumber"]').clear().type(addressnumber)
    cy.get('#parsley-id-15').should('not.be.visible')
})


}
LegalTK() {
cy.fixture('User.json').then((User) => {
    const letterscountrycode = User.Letterscountrycode
    const numberscountrycode = User.Numberscountrycode
    const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
    cy.get('#parsley-id-17').should('contain', 'Το πεδίο του τ.κ. είναι υποχρεωτικό.')
    cy.get('[name="addressZipCode"]').should('have.attr', 'required')
    cy.get('[name="addressZipCode"]').invoke('attr', 'data-parsley-length').should('eq', '[5,5]');
    cy.get('[name="addressZipCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="addressZipCode"]').type(letterscountrycode)
    cy.get('#parsley-id-17').should('contain', 'Το πεδίο του τ.κ. πρέπει να αποτελείται μόνο από ψηφία.')
    cy.get('[name="addressZipCode"]').clear().type(lessthan3Numberscountrycode)
    cy.get('#parsley-id-17').should('contain', 'Το πεδίο του  τ.κ. πρέπει να αποτελείται από 5 ψηφία.')
    cy.get('[name="addressZipCode"]').clear().type(numberscountrycode)
    cy.get('#parsley-id-17').should('not.be.visible')

})
}
LegalBirthDay() {
cy.fixture('User.json').then((User) => {

    const birthdayletters = User.BirthDayletters
    const birthdaywrong = User.BirthDayWRONG
    const birthday = User.BirthDay
   const birthday1number = User.BirthDay1number
    cy.get('#parsley-id-19').should('contain', 'Το πεδίο της ημέρας είναι υποχρεωτικό.')
    cy.get('[name="day"]').should('have.attr', 'required')
    cy.get('[name="day"]').invoke('attr', 'data-parsley-length').should('eq', '[2,2]');
    cy.get('[name="day"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="day"]').invoke('attr', 'data-parsley-max').should('eq', '31');
    cy.get('[name="day"]').type(birthdayletters)
    cy.get('#parsley-id-19').should('contain', 'Το πεδίο της ημέρας πρέπει να περιέχει μόνο ψηφία.')
    cy.get('[name="day"]').clear().type(birthdaywrong)
    cy.get('#parsley-id-19').should('contain', 'Το πεδίο της ημέρας πρέπει να είναι μικρότερο ή ίσο με το 31.')
    cy.get('[name="day"]').clear().type(birthday1number)
    cy.get('#parsley-id-19').should('contain', 'Το πεδίο της ημέρας πρέπει να αποτελείται ακριβώς από 2 ψηφία.')
    cy.get('[name="day"]').clear().type(birthday)
    cy.get('#parsley-id-19').should('not.be.visible')

})
}
LegalBirthmonth() {
cy.fixture('User.json').then((User) => {

    const birthmonthletters = User.BirthMonthletters
    const birthmonthwrong = User.BirthMonth2numberover12
    const birthmonth = User.BirthMonthr
   const birthmonth1number = User.BirthMonth1number
    cy.get('#parsley-id-21').should('contain', 'Το πεδίο του μήνα είναι υποχρεωτικό.')
    cy.get('[name="month"]').should('have.attr', 'required')
    cy.get('[name="month"]').invoke('attr', 'data-parsley-length').should('eq', '[2,2]');
    cy.get('[name="month"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="month"]').invoke('attr', 'data-parsley-max').should('eq', '12');
    cy.get('[name="month"]').type(birthmonthletters)
    cy.get('#parsley-id-21').should('contain', 'Το πεδίο του μήνα πρέπει να περιέχει μόνο ψηφία.')
    cy.get('[name="month"]').clear().type(birthmonthwrong)
    cy.get('#parsley-id-21').should('contain', 'Το πεδίο του μήνα πρέπει να είναι μικρότερο ή ίσο με το 12.')
    cy.get('[name="month"]').clear().type(birthmonth1number)
    cy.get('#parsley-id-21').should('contain', 'Το πεδίο του μήνα πρέπει να αποτελείται ακριβώς από 2 ψηφία.')
    cy.get('[name="month"]').clear().type(birthmonth)
    cy.get('#parsley-id-21').should('not.be.visible')

})
}
LegalBirthyear() {
cy.fixture('User.json').then((User) => {

    const birthyearletters = User.Birthyearletters
    const birthyearwrong = User.Birthyearmorethan2024
    const birthyear = User.Birthyear
   const birthyear1number = User.Birthyearlessthan4
    cy.get('#parsley-id-23').should('contain', 'Το πεδίο του έτους είναι υποχρεωτικό.')
    cy.get('[name="year"]').should('have.attr', 'required')
    cy.get('[name="year"]').invoke('attr', 'data-parsley-length').should('eq', '[4,4]');
    cy.get('[name="year"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="year"]').invoke('attr', 'data-parsley-max').should('eq', '2024');
    cy.get('[name="year"]').type(birthyearletters)
    cy.get('#parsley-id-23').should('contain', 'Το πεδίο του έτους πρέπει να περιέχει μόνο ψηφία.')
    cy.get('[name="year"]').clear().type(birthyearwrong)
    cy.get('#parsley-id-23').should('contain', 'Το πεδίο του έτους πρέπει να είναι μικρότερο ή ίσο με το 2024.')
    cy.get('[name="year"]').clear().type(birthyear1number)
    cy.get('#parsley-id-23').should('contain', 'Το πεδίο του έτους πρέπει να αποτελείται ακριβώς από 4 ψηφία.')
    cy.get('[name="year"]').clear().type(birthyear)
    cy.get('#parsley-id-23').should('not.be.visible')

})
}
LegalCountryphonecode() {
cy.fixture('User.json').then((User) => {
    const letterscountrycode = User.Letterscountrycode
    const numberscountrycode = User.Numberscountrycode
    const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
    cy.get('#parsley-id-25').should('contain', 'Το πεδίο του κωδικού χώρας είναι υποχρεωτικό.')
    cy.get('[name="CountryPhoneCode"]').should('have.attr', 'required')
    cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-minlength').should('eq', '3');
    cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-maxlength').should('eq', '5');
    cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="CountryPhoneCode"]').type(letterscountrycode)
    cy.get('#parsley-id-25').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να αποτελείται μόνο από ψηφία.')
    cy.get('[name="CountryPhoneCode"]').clear().type(lessthan3Numberscountrycode)
    cy.get('#parsley-id-25').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να έχει τουλάχιστον 3 ψηφία.')
    cy.get('[name="CountryPhoneCode"]').clear().type(numberscountrycode)
    cy.get('#parsley-id-25').should('not.be.visible')
})
}
legalPhonenumber() {
cy.fixture('User.json').then((User) => {

    const phonenumberletters = User.Phonenumberletters
    const numbersPhonenumber = User.NumbersPhonenumber
    const lessNumbersPhonenumber = User.LessNumbersPhonenumber
    cy.get('#parsley-id-27').should('contain', 'Το πεδίο του κινητού είναι υποχρεωτικό.')
    cy.get('[name="PhoneNumber"]').should('have.attr', 'required')
    cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-minlength').should('eq', '10');
    cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-maxlength').should('eq', '15');
    cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="PhoneNumber"]').type(phonenumberletters)
    cy.get('#parsley-id-27').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να αποτελείται μόνο από ψηφία.')
    cy.get('[name="PhoneNumber"]').clear().type(lessNumbersPhonenumber)
    cy.get('#parsley-id-27').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να έχει τουλάχιστον 10 ψηφία.')
    cy.get('[name="PhoneNumber"]').clear().type(numbersPhonenumber)
    cy.get('#parsley-id-27').should('not.be.visible')

})
}
Gemi(){

    cy.fixture('User.json').then((User) => {
        const phonenumberletters = User.Phonenumberletters
        const gemi = User.Gemi
        const lessNumbersPhonenumber = User.LessNumbersPhonenumber
        
    cy.get('#parsley-id-11').should('contain', 'Το πεδίο του γεμή επιχείρησης είναι υποχρεωτικό.')
    cy.get('[name="identification"]').should('have.attr', 'required')
    cy.get('[name="identification"]').invoke('attr', 'data-parsley-minlength').should('eq', '11');
    cy.get('[name="identification"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
    cy.get('[name="identification"]').type(phonenumberletters)
    cy.get('#parsley-id-11').should('contain','Το πεδίο του γεμή επιχείρησης πρέπει να αποτελείται μόνο από ψηφία.')
    cy.get('[name="identification"]').clear().type(lessNumbersPhonenumber)
    cy.get('#parsley-id-11').should('contain','Το πεδίο του γεμή επιχείρησης πρέπει να αποτελείται από τουλάχιστον 11 ψηφία.')
    cy.get('[name="identification"]').clear().type(gemi)
    cy.get('#parsley-id-11').should('not.be.visible')


})
}

LegalContinue(){{

    cy.get('#reissue-password-legal-step-2-continue').click()
    cy.get('.text-error').should('contain', 'Τα στοιχεία δεν μπορούν να επαληθευτούν!')
}}

}

export default forgotuserpass