describe('DemoQA Practice Form - Negative Test Cases', () => {
    beforeEach(() => {
      cy.visit('/automation-practice-form');
      Cypress.on('uncaught:exception', () => false); // Ignore third-party script errors
    });
  
    it('TC_NEG_01 - Submit with empty required fields', () => {
      cy.get('#submit').click();
      cy.get('.modal-content').should('not.exist');
    });
  
    it('TC_NEG_02 - Enter invalid email format', () => {
      cy.get('#firstName').type('test');
      cy.get('#lastName').type('user');
      cy.get('#userEmail').type('test.xy');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9810203040');
      cy.get('#submit').click();
      cy.get('.modal-content').should('not.exist');
    });
  
    it('TC_NEG_03 - Less than 10 digits in Mobile Number', () => {
      cy.get('#firstName').type('test');
      cy.get('#lastName').type('user');
      cy.get('#userEmail').type('test@gmail.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('12345');
      cy.get('#submit').click();
      cy.get('.modal-content').should('not.exist');
    });
  
    it('TC_NEG_04 - Submit without selecting gender', () => {
      cy.get('#firstName').type('test');
      cy.get('#lastName').type('user');
      cy.get('#userEmail').type('test@gmail.com');
      cy.get('#userNumber').type('9810203040');
      cy.get('#submit').click();
      cy.get('.modal-content').should('not.exist');
    });
  
    it('TC_NEG_05 - JavaScript Injection in address', () => {
      cy.get('#firstName').type('test');
      cy.get('#lastName').type('user');
      cy.get('#userEmail').type('test@gmail.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9810203040');
      cy.get('#currentAddress').type('<script>alert("hack")</script>');
      cy.get('#submit').click();
      cy.get('.modal-content').should('exist'); // If it exists, vulnerability might be present
    });
  });
  