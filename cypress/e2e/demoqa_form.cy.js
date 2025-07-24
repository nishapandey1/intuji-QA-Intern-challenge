describe('DemoQA Practice Form Automation', () => {
    beforeEach(() => {
      cy.visit('/automation-practice-form');
    });
  
    it('Submits form with valid data', () => {
      cy.get('#firstName').type('test');
      cy.get('#lastName').type('rest');
      cy.get('#userEmail').type('test@gmail.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9810203040');
  
      // Date of Birth
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('2005');
      cy.get('.react-datepicker__month-select').select('April');
      cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();
  
      // Subject
      cy.get('#subjectsInput').type('Computer{enter}');
  
      // Hobbies
      cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
      cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
  
      // Upload Picture (Make sure you have the file in `cypress/fixtures`)
      cy.get('#uploadPicture').attachFile('sample.jpg');
  
      // Address
      cy.get('#currentAddress').type('ktmt, Nepal');
  
      // State and City
      cy.get('#state').click().get('#react-select-3-option-0').click(); // NCR
      cy.get('#city').click().get('#react-select-4-option-0').click(); // Delhi
  
      // Submit
      cy.get('#submit').click();
  
      // Assert success
      cy.get('#example-modal-sizes-title-lg')
        .should('contain', 'Thanks for submitting the form');
    });
  });
  