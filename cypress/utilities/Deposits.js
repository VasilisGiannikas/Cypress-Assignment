

require('cypress-downloadfile/lib/downloadFileCommand')

class deposits{

depositsmenuclick(){
    
    cy.get('#Deposits2_Btn ').click()

}
depositsAccounts(){
    cy.contains('a', 'Λογαριασμοί').click();
    cy.url().should('contain','/Depository')
}
AccountTamieutirioVisible(){
    cy.contains('ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ').should('be.visible');

    // Check for the presence of the IBAN
    cy.contains('IBAN: GR0707500010010011071670006').should('be.visible');

    // Check for the presence of the account number
    cy.contains('Αρ. Λογαριασμού: 1001107167000-6').should('be.visible');
}
AccountOpseosclick(){
    cy.get('a.nav-link[href="#menu3"]').click();

}
AccountOpseosVisible(){
      // Check for the presence and visibility of the account name
      cy.contains('ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ2').should('be.visible');

      // Check for the presence and visibility of the IBAN
      cy.contains('IBAN: GR1607500010030011071670008').should('be.visible');
  
      // Check for the presence and visibility of the account number
      cy.contains('Αρ. Λογαριασμού: 3001107167000-8').should('be.visible');
  
      // Check for the visibility of the account balance
      cy.get('.AmountTag').contains('1.000,00 €').should('be.visible');
}
TamieutirioClick(){
    cy.get('a.nav-link[href="#menu1"]').click();
}
Copytoclipbard(){
    cy.window().then((win) => {
        cy.stub(win.document, 'execCommand').callsFake((command) => {
          // You can add additional logic here if needed
          if (command === 'copy') {
            // Simulate a successful copy operation
            return true;
          }
        }).as('clipboard');
      });
  
      // Trigger the copy action
      cy.get('div.col-sm').find('svg.fa-copy').first().click();

  
      // Assert that the copy command was called
      cy.get('@clipboard').should('have.been.calledWith', 'copy');
  
      // Further assertions can be added here if needed
    
 
}

accountSettings(){
    cy.get('div.col-sm').find('svg.fa-wrench').first().click();
  

}
CopytoclipbardOpseos(){
    cy.window().then((win) => {
        cy.stub(win.document, 'execCommand').callsFake((command) => {
          // You can add additional logic here if needed
          if (command === 'copy') {
            // Simulate a successful copy operation
            return true;
          }
        }).as('clipboard');
      });
  
      // Trigger the copy action
      cy.get('div.col-sm').find('svg.fa-copy').eq(1).click();

  
      // Assert that the copy command was called
      cy.get('@clipboard').should('have.been.calledWith', 'copy');
  
      // Further assertions can be added here if needed
    
 
}

accountSettingsOpseos(){
    cy.get('div.col-sm').find('svg.fa-wrench').eq(1).click();
  

}
Colorcheck(){

    cy.get('div.col-md-6 input[type="color"]').should('exist')

    // Check the default value of the color input
    cy.get('div.col-md-6 input[type="color"]').should('have.value', '#aaaaaa');

    // Change the color and verify the new value
    const newColor = '#ff0000'; // example new color
    cy.get('div.col-md-6 input[type="color"]').invoke('val', newColor).trigger('change');
    cy.get('div.col-md-6 input[type="color"]').should('have.value', newColor);

}
Namecheck(){
    cy.fixture('User.json').then((User) => {
        const username = User.Username
    cy.get('input#Alias').should('exist');

    // Check the default value of the text input
    cy.get('input#Alias').should('have.value', 'ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ');

    // Change the text and verify the new value
   
    cy.get('input#Alias').clear().type(username);
    cy.get('input#Alias').should('have.value', username);
})
}
ContinueClick(){
    cy.get('input.btn.btn-success.col-md-12').click()
}
ValidateNameAndColor(){
    cy.fixture('User.json').then((User) => {
        const username = User.Username
    cy.contains(username).should('be.visible');
    })
    cy.get('div').contains('qatester').should('have.css', 'color', 'rgb(255, 0, 0)');
}
ChangeBackNameColor(){
    
        const newColor = '#aaaaaa'
        cy.get('div.col-md-6 input[type="color"]').invoke('val', newColor).trigger('change');
        cy.get('input#Alias').clear().type('ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ');
}

NamecheckOPSEOS(){
    cy.fixture('User.json').then((User) => {
        const username = User.Username
    cy.get('input#Alias').should('exist');

    // Check the default value of the text input
    cy.get('input#Alias').should('have.value', 'ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ2');

    // Change the text and verify the new value
   
    cy.get('input#Alias').clear().type(username);
    cy.get('input#Alias').should('have.value', username);
})

}
ChangeBackNameColorOpseos(){
    
    const newColor = '#aaaaaa'
    cy.get('div.col-md-6 input[type="color"]').invoke('val', newColor).trigger('change');
    cy.get('input#Alias').clear().type('ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ ΤΕΣΤ2');
}
TamieutirioAccountClick(){
cy.get('.list-group-item.accountListItem').first().click();
}
ValidateaccountInfoTamieutirio(){
    // Validate that the "Ενεργός" checkbox is checked and disabled
cy.get('#CustomerAccountDetails__lgmLogaIsActive_Value')
.should('be.checked')
.should('be.disabled');

// Validate the text of "Κατάσταση λογαριασμού" row
cy.get('.table tbody tr:nth-child(2) td.text-right.font-weight-bold')
.should('have.text', '001 - Ενεργός');

// Validate that "Δεσμευμένο" and "Υπερανάληψης" rows have the specified text
cy.get('.table tbody tr:nth-child(3) td.text-left')
.should('have.text', 'Δεσμευμένο');
cy.get('.table tbody tr:nth-child(4) td.text-left')
.should('have.text', 'Υπερανάληψης');

// Validate the text of "Ημερομηνία απόδοσης τόκων" row
cy.get('.table:last tbody tr td.text-right.font-weight-bold')
.should('have.text', '21/12/2023');

}
ClickMore(){
    cy.get('.col-md-12.row.homeTitleText').click();

}
KlimakesEpitokiou(){
    
    cy.get('.card-title').should('contain', 'Κλίμακες Επιτοκίου');
    cy.get('table.table').should('exist');
   
}
Dikaiouxoi(){
    cy.get('.card-title').should('contain', 'Δικαιούχοι');
    cy.contains('Κύριος: ΠΑΠΑΔΟΠΟΥΛΟΣ ΑΘΑΝΑΣΙΟΣ').should('exist');
}
VevaiwsitirisisAccount(){
    cy.get('#accountRepex').should('exist');
    cy.get('#accountRepex').should('contain', 'Βεβαίωση τήρησης λογαριασμού');
    
}
ValidateMonthAnalisis(){
    cy.get('.card-title').should('contain', 'Μηνιαία Ανάλυση');
    cy.get('#monthlyOverviewContent').should('exist');
    cy.get('#CurrentMonthOverview').should('exist');
    cy.get('#PreviousMonthOverview').should('exist');

}
ClickRefreshMonthlyAnalisis(){
    cy.get('.svg-inline--fa.fa-sync.fa-w-16.dontOpenDialog.btnStyle').click()
}
SinallagesAnazitisi(){
    cy.get('#fromDate').clear().type('17/12/2023');
    cy.get('.mt-4 > :nth-child(1) > .card-title').click()
    cy.get('#toDate').clear().type('17/01/2024');
    cy.get('.mt-4 > :nth-child(1) > .card-title').click()
    // Interact with the dropdown
    // Open the Select2 dropdown
cy.get('.select2-selection--single').click();

// Select the option by its visible text
cy.get('.select2-results__option').contains('Όλες').click();

    // Click the search button
    cy.get('#updateTable').click();
}
ValidateTransactions(){
    cy.get('#accountTransactionDetailsWithBalance').should('exist');
    cy.get('#accountTransactionDetailsWithBalance tbody tr').each(($row) => {
        cy.wrap($row).within(() => {
            // Check if each row has the correct number of cells
            cy.get('td').should('have.length', 6); // Adjust according to your table structure

            // Assert the content of specific cells, for example, the date and amount
            cy.get('td').eq(1).invoke('text').should('match', /\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}/);
            cy.get('td').eq(4).invoke('text').should('contain', 'EUR(€)');

            // Check for currency
        })
    })
    cy.get('th').contains('Ημερομηνία').click();
    cy.get('a[href*="TransactionDetails"]').first().should('have.attr', 'href').and('include', 'TransactionDetails');
}
Print(){
    cy.get('.buttons-print').should('exist').and('be.visible');
    
   
}


 ExcelDownload() {
    // Intercept all outgoing GET requests
    cy.intercept('GET', '**').as('getFileDownloadUrl');

    // Click the download button
    cy.get('.buttons-excel').should('exist').and('be.visible').click();

    // Wait for the file download request to be made and capture it
    cy.wait('@getFileDownloadUrl').then(interception => {
        const downloadUrl = interception.request.url;

        // Log the URL or perform further actions
        cy.log('Download URL:', downloadUrl);

        // Additional check to ensure it's the correct URL
        // For example, you might want to check it contains certain path segments

        // Perform the download if the URL is correct
        // Note: The actual download process here depends on how your server sends the file
        cy.request({
            url: downloadUrl,
            encoding: 'binary',
        }).then(response => {
            const filepath = 'cypress/downloads/excel.xlsx';
            cy.writeFile(filepath, response.body, 'binary');
        }).then(() => {
            // Verify the file exists
            // You might need a custom task for this
            cy.task('checkfileexists', 'cypress/downloads/excel.xlsx').then(fileexists => {
                expect(fileexists).to.be.true;
            });
        });
    });
}
PdfDownload() {

        // Intercept all outgoing GET requests
        cy.intercept('GET', '**').as('getFileDownloadUrl');
    
        // Click the download button
        cy.get('.buttons-pdf').should('exist').and('be.visible').click({ force: true });
    
        // Wait for the file download request to be made and capture it
        cy.wait('@getFileDownloadUrl').then(interception => {
            const downloadUrl = interception.request.url;
    
            // Extract the file name from the URL
            const fileName = downloadUrl.split('/').pop();
    
            // Log the URL and file name
            cy.log('Download URL:', downloadUrl);
            cy.log('File Name:', fileName);
    
            // Perform the download if the URL is correct
            cy.request({
                url: downloadUrl,
                encoding: 'binary',
            }).then(response => {
                // Use the extracted file name for saving
                const filepath = `cypress/downloads/${fileName}`;
                cy.writeFile(filepath, response.body, 'binary');
            }).then(() => {
                // Verify the file exists
                // You might need a custom task for this
                cy.task('checkfileexists', `cypress/downloads/${fileName}`).then(fileexists => {
                    expect(fileexists).to.be.true;
                });
            });
        });
    }
    
}export default deposits