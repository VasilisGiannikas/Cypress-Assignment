class lockunlockaccount{

    Lockaccount(){
        cy.get('[href="/el/Account/BlockMyAccount"] > small').click()
        cy.url().should('contain', '/BlockMyAccount')
        cy.get('h5.mb-4').should('contain', 'Κλείδωμα Λογαριασμού')
        cy.get('#block-my-account-step-2-continue').click()
    }
    Taxid() {
        cy.fixture('User.json').then((User) => {
            const lettersTaxid = User.LettersTaxid
            const numbersTaxidlessthan9 = User.NumbersTaxidlessthan9
            const numbersTaxid = User.NumbersTaxid
            const rightnumbersTaxid = User.RightNumbersTaxid
            cy.get('#parsley-id-5').should('contain','Το πεδίο του ΑΦΜ είναι υποχρεωτικό.')
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
    Username(){
        cy.fixture('User.json').then((User) => {
            const username = User.Username
            cy.get('#parsley-id-7').should('contain','Το πεδίο του ονόματος χρήστη είναι υποχρεωτικό.')
            cy.get('[name="username"]').should('have.attr', 'required')
            cy.get('[name="username"]').type(username)
            cy.get('#parsley-id-7').should('not.be.visible');

    })
}
Countryphonecode() {
    cy.fixture('User.json').then((User) => {
        const letterscountrycode = User.Letterscountrycode
        const numberscountrycode = User.Numberscountrycode
        const lessthan3Numberscountrycode = User.Lessthan3Numberscountrycode
        cy.get('#parsley-id-9').should('contain','Το πεδίο του κωδικού χώρας είναι υποχρεωτικό.')
        cy.get('[name="CountryPhoneCode"]').should('have.attr', 'required')
        cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-minlength').should('eq', '3');
        cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-maxlength').should('eq', '5');
        cy.get('[name="CountryPhoneCode"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
        cy.get('[name="CountryPhoneCode"]').type(letterscountrycode)
        cy.get('#parsley-id-9').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να αποτελείται μόνο από ψηφία.')
        cy.get('[name="CountryPhoneCode"]').clear().type(lessthan3Numberscountrycode)
        cy.get('#parsley-id-9').should('contain', 'Το πεδίο του κωδικού χώρας πρέπει να έχει τουλάχιστον 3 ψηφία.')
        cy.get('[name="CountryPhoneCode"]').clear().type(numberscountrycode)
        cy.get('#parsley-id-9').should('not.be.visible')
    })
}
Phonenumber() {
    cy.fixture('User.json').then((User) => {

        const phonenumberletters = User.Phonenumberletters
        const numbersPhonenumber = User.NumbersPhonenumber
        const lessNumbersPhonenumber = User.LessNumbersPhonenumber
        cy.get('#parsley-id-11').should('contain','Το πεδίο του κινητού είναι υποχρεωτικό.')
        cy.get('[name="PhoneNumber"]').should('have.attr', 'required')
        cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-minlength').should('eq', '10');
        cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-maxlength').should('eq', '15');
        cy.get('[name="PhoneNumber"]').invoke('attr', 'data-parsley-type').should('eq', 'digits');
        cy.get('[name="PhoneNumber"]').type(phonenumberletters)
        cy.get('#parsley-id-11').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να αποτελείται μόνο από ψηφία.')
        cy.get('[name="PhoneNumber"]').clear().type(lessNumbersPhonenumber)
        cy.get('#parsley-id-11').should('contain', 'Το πεδίο του αριθμού τηλεφώνου πρέπει να έχει τουλάχιστον 10 ψηφία.')
        cy.get('[name="PhoneNumber"]').clear().type(numbersPhonenumber)
        cy.get('#parsley-id-11').should('not.be.visible')

    })
}
ContinueBlockAccount(){
    cy.get('#block-my-account-step-2-continue').click()
    cy.get('h5.mb-4').should('contain','Ανεπιτυχές κλείδωμα λογαριασμού')
}

UnLockaccount(){
    cy.get('[href="/el/Account/ReactivatePassword"] > small').click()
    cy.url().should('contain', '/ReactivatePassword')
    cy.get('h5.mb-4').should('contain', 'Επαναφορά πρόσβασης λογαριασμού')
    cy.get('#reactivate-password-step-2-continue').click()
}
ContinueUnBlockAccount(){
    cy.get('#reactivate-password-step-2-continue').click()
    cy.get('.text-error').should('contain','Ανεπιτυχής προσπάθεια επαναφοράς!')
}


} export default lockunlockaccount