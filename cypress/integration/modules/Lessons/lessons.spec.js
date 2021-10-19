/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123';

describe('Accessing Assessment Screen', () => {
  
  before(() => {
    cy.login(username, password);
  
  })
  
  it('Access Lessons Page Page', () => {
    cy.get('.ot-todo-list-item__heading').click();
    cy.get('.student-lesson__header__left__title').should('be.visible');

  });

  it('7 Assignments, Links to Assignment, Completed Status', () => {
    
    cy.get('.ot-lesson-card-header').should('have.length', 7);
    cy.get('.ot-lesson-card-header').first().should('be.visible').as('assignment');
    cy.get('@assignment').click();
    cy.contains('Go to' || 'Download');
    cy.contains('Completed');
  
  });
  
});