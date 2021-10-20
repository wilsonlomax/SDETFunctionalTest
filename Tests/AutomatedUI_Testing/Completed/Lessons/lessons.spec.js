/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123';

describe('Lesson Test Scripts', () => {
  
  before(() => {
    cy.login(username, password);
  
  })
  
  it('Access Lessons Page', () => {
    cy.get('.ot-todo-list-item__heading').click();
    cy.get('.student-lesson__header__left__title').should('be.visible');

  });

  it('7 Assignments for User Found, Links to Assignment Visible, Completed Status', () => {
    
    cy.get('.ot-lesson-card-header').should('have.length', 7);
    cy.get('.ot-lesson-card-header').first().should('be.visible').as('assignment');
    cy.get('@assignment').click();
    cy.contains('Go to' || 'Download');
    cy.contains('Completed');
    cy.get('button[aria-label="Close"]').click();
  
  });

  it('Complete Label Found when Assignment Card Opened and Assignment not Complete', () => {
    cy.get('.ot-lesson-card-header').last().click();
    cy.get('.ot-checkbox__label').contains('Complete');
    cy.get('button[aria-label="Close"]').click();

  });

  it('Completed Label on Assignment Card after Checking Completed Checkbox', () => {
    
    cy.get('.ot-lesson-card-header').last().click().as('lastCard');
    cy.get('.ot-checkbox__label').contains('Complete').as('Complete');
    cy.get('@Complete').click();
    cy.get('lesson-card').last().contains('Completed');
    cy.get('.ot-lesson-card-header').last().click();
    cy.get('@Complete').click();
    cy.get('button[aria-label="Close"]').click();

  });


  
});