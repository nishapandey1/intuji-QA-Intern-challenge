describe('DemoQA - Known Bug Validations', () => {
    beforeEach(() => {
      cy.visit('/automation-practice-form');
      Cypress.on('uncaught:exception', () => false); // Ignore third-party JS errors
    });
  
    it('Bug #1 - Accepts Invalid Email Format', () => {
      cy.get('#firstName').type('Test');
      cy.get('#lastName').type('User');
      cy.get('#userEmail').type('test@tes.yp'); // Invalid email
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9876543210');
      cy.get('#submit').click();
  
      // This should fail if email is invalid — but it doesn't
      cy.get('.modal-content').should('exist');
    });
  
    it('Bug #2 - Upload Accepts .exe Files', () => {
      cy.get('#firstName').type('Test');
      cy.get('#lastName').type('User');
      cy.get('#userEmail').type('test@example.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9876543210');
      cy.get('#uploadPicture').attachFile('virus.exe'); // Must exist in fixtures
      cy.get('#submit').click();
  
      // This should not happen for unsupported file types
      cy.get('.modal-content').should('exist');
    });
  
    it('Bug #3 - Accepts Future Date of Birth', () => {
      cy.get('#firstName').type('Test');
      cy.get('#lastName').type('User');
      cy.get('#userEmail').type('test@example.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9876543210');
  
      // Select a future date from datepicker
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('2030');
      cy.get('.react-datepicker__month-select').select('January');
      cy.get('.react-datepicker__day--015').click(); // Jan 15, 2030
  
      cy.get('#submit').click();
  
      // Form should not be accepted with future DOB, but it is
      cy.get('.modal-content').should('exist');
    });
  });
  