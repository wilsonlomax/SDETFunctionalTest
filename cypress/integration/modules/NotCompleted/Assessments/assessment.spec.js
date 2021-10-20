/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123'

// Accessing Assessment Screen

describe('Assessment Test Scripts', () => {
  
before(() => {
  cy.login(username, password);

})

it('Open Assignment from Assessment Page', () => {
  cy.get(':nth-child(6) > a > .nav-item-text').click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .ot-assess-list-row__title').click();
  cy.get('.ot-retake-assessment-modal__button-container > .ng-star-inserted').click();
  cy.url().should('include', 'student-review');

});

});