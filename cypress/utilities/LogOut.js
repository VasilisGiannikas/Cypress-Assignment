class logout{

     Logout(){

   cy.get('a[data-target="#LogOutModal"]').click()
   cy.get('h5.modal-title').should('contain', 'Αποσύνδεση')
   cy.get('button.btn.btn-sm.btn-outline-danger.dontOpenDialog').click();
   cy.url().should('contain', 'https://ebepirus.natech.gr/el/Account/UserLogin')

     } 

}export default logout