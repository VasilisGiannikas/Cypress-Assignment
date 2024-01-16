class loginpage {


    visitLoginPage() {

        cy.visit('/login')
        cy.url().should('eq', 'https://ebepirus.natech.gr/el/Account/UserLogin/login')
        cy.get(".cc-btn.cc-dismiss.dontOpenDialog").click()  //cookies accept
    }


    ValidSignin() {
        cy.fixture('User.json').then((User) => {
            const username = User.Username
            const password = User.Password
            
            cy.get('#UserName').type(username)
            cy.get('#Password').type(password)
            cy.get('.btn-main').click()
            cy.url().should('include', '/Home');
            cy.get('.col-md-12.greeting').should('contain', 'Καλώς ήρθατε');//welcome message

        }


        )
    }

    InvalidSigninUserPassMiss() {
        
        cy.get('.btn-main').click()
        cy.get('#UserName').should('have.attr', 'required')
        cy.get('#parsley-id-5').should('contain', 'Το πεδίο του ονόματος χρήστη είναι υποχρεωτικό.')
        cy.get('#Password').should('have.attr', 'required')
        cy.get('#parsley-id-7').should('contain', 'Το πεδίο του κωδικού χρήστη είναι υποχρεωτικό.')
    }
    InvalidSigninUserPassWrong() {
        cy.fixture('User.json').then((User) => {
            const wronguser = User.WrongUsername
            const wromgpass = User.WrongPassword
            
            cy.get('#UserName').type(wronguser)
            cy.get('#Password').type(wromgpass)
            cy.get('.btn-main').click()
            cy.get('.text-error').should('contain', 'Μη έγκυρη προσπάθεια σύνδεσης.')
        })
    }
    InvalidSigninPassWrong() {
        cy.fixture('User.json').then((User) => {
            const username = User.Username
            const wromgpass = User.WrongPassword
           
            cy.get('#UserName').type(username)
            cy.get('#Password').type(wromgpass)
            cy.get('.btn-main').click()
            cy.get('.text-error').should('contain', 'Μη έγκυρη προσπάθεια σύνδεσης.')
        })
    }
    InvalidSigninUserWrong() {
        cy.fixture('User.json').then((User) => {
            const wronguser = User.WrongUsername
            const password = User.Password
           
            cy.get('#UserName').type(wronguser)
            cy.get('#Password').type(password)
            cy.get('.btn-main').click()
            cy.get('.text-error').should('contain', 'Μη έγκυρη προσπάθεια σύνδεσης.')
        })
    }

}

export default loginpage