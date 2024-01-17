

class transactions {

    TransactionsClick() {
        cy.get('#Transactions2_Btn').click()

    }
    MetaforesClick() {
        cy.get('a.nav-link.menu-main-item[href="#collapseStatistics2"]').click();



    }
    MetaforesLogariasmoM() {
        cy.get('ul#collapseStatistics2 li.nav-item a.menu-main-item').eq(0).click();

    }
    Transactionfrmmetome() {
        cy.get('.select2-selection--single').eq(0).click();
        cy.get('.select2-results__option').contains('1001107167000-6').click();
        cy.get('.select2-selection--single').eq(1).click();
        cy.get('.select2-results__option').contains('3001107167000-8').click();
        cy.get('#Amount').type("100")
        cy.get('#Reason').type('test')
        cy.get('#settlementDateOptionToday').should('be.checked')
        cy.get('#settlementDateOptionFuture').check()
        cy.get('#settlementDateOptionFuture').should('be.checked')

        cy.get('#settlementDateOptionRepeat').check()
        cy.get('#Name').type('VAS');
        cy.get('#MaxTimes').type('5');
        cy.get('#Occurances').type('2');
        cy.get('#InfiniteTimes').check();
        cy.get('#InfiniteTimes').uncheck();
        cy.get('#MaxTimes').clear().type('3');
        cy.get('#RepeatingType').select('Μήνα/ες');
        cy.get('#ExecutionType').select('Πρώτη μέρα του μήνα');

        cy.get('#EndDate').invoke('val', '2024-12-31');

        // Submit the form
        cy.get('button').contains('Συνέχεια').click();
        cy.get('#settlementDateOptionRepeat').should('be.checked')
       
   
   
          
        cy.get('#SubmitFormWithEnterKey').click()
        cy.get(':nth-child(2) > .card-body > .card-title').should('have.text', 'Επιβεβαίωση - Μεταφορά σε λογαριασμό μου');

        // Validate account details
        cy.get(':nth-child(1) > .text-md-left').invoke('text').then((text) => {
            expect(text.trim()).to.equal('1001107167000-6');
        });

        cy.get(':nth-child(2) > .text-md-left').invoke('text').then((text) => {
            expect(text.trim()).to.equal('3001107167000-8');
        })
        cy.get(':nth-child(2) > :nth-child(3) > .text-md-left').invoke('text').then((text) => {
            // Normalize whitespace and compare
            const normalizedText = text.replace(/\s+/g, ' ').trim();
            expect(normalizedText).to.equal('100,00 €');
        });

        cy.get(':nth-child(2) > :nth-child(6) > .text-md-left').invoke('text').then((text) => {
            expect(text.trim()).to.equal('test')
        })
        cy.get(':nth-child(2) > :nth-child(7) > .text-md-left').invoke('text').then((text) => {
            expect(text.trim()).to.equal('17/1/2024')
        })
        cy.get(':nth-child(2) > [style="font-size: 16px;"] > :nth-child(3) > .text-md-left').invoke('text').then((text) => {
            expect(text.trim()).to.equal('VAS')
        })
        cy.get('#smsCode').click()
        cy.get('#smsCode').type('1234')
        cy.get('#submitButton').click()
        cy.wait(5000)
        cy.get('#myModalLabel').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Αποτυχία')
        })
        cy.get('#modal-main-content').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Λάθος κωδικός SMS!')
        })
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .btn').click();

    }
Prototypesave(){
    cy.get('.select2-selection--single').eq(0).click();
        cy.get('.select2-results__option').contains('1001107167000-6').click();
        cy.get('.select2-selection--single').eq(1).click();
        cy.get('.select2-results__option').contains('3001107167000-8').click();
        cy.get('#Amount').type("100")
        cy.get('#Reason').type('test')
        cy.get('#settlementDateOptionToday').should('be.checked')
        cy.get('#settlementDateOptionFuture').check()
        cy.get('#settlementDateOptionFuture').should('be.checked')

        cy.get('#settlementDateOptionRepeat').check()
        cy.get('#Name').type('VAS');
        cy.get('#MaxTimes').type('5');
        cy.get('#Occurances').type('2');
        cy.get('#InfiniteTimes').check();
        cy.get('#InfiniteTimes').uncheck();
        cy.get('#MaxTimes').clear().type('3');
        cy.get('#RepeatingType').select('Μήνα/ες');
        cy.get('#ExecutionType').select('Πρώτη μέρα του μήνα');

        cy.get('#EndDate').invoke('val', '2024-12-31');

        // Submit the form
        cy.get('button').contains('Συνέχεια').click();
        cy.get('#settlementDateOptionRepeat').should('be.checked')
        //original save
         cy.get('svg.fa-save').first().click()
           cy.get('#SaveTemplateNameField').type('Prototype')
           cy.get('a.btn.btn-success.btn-sm.col-md-12').contains('Αποθήκευση').dblclick();

           cy.get('#ModalHeaderInner').should('contain', 'Επιτυχής Ενέργεια!');
           cy.get('#SaveTemplateResultContent').should('contain', 'Το πρότυπο αποθηκεύτηκε επιτυχώς!');
   
   
           cy.get('.modal-content .close').click();
}


} export default transactions