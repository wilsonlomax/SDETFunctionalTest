/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123'

// Accessing Assessment Screen

describe('Accessing Assessment Screen', () => {
  
before(() => {
  cy.login(username, password);

})

it('Login Successful', () => {
  cy.get('.title-row > p').should('contain', 'Home');
});

it('Access Assessment Page', () => {
  cy.get('.navcollection ul li').contains('Assessments').click();
  cy.get('.title-row > p').should('contain', 'Assessments');
});

});

// Taking an Assessment