/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123';

describe('Gradebook Test Scripts', () => {

  before(() => {
    cy.login(username, password);
  
  })

  it('Assess Gradebook Page', () => {
    cy.get(':nth-child(7) > a').click();
    cy.get('.title-row').should('contain', 'Gradebook');
  })

  it('Grade Analytics Table Opens after Class Selected', () => {
    cy.get('tbody tr td').contains('SDET Candidates').click();
    cy.wait(3000);
    cy.get('.page-heading').should('contain','Grade Analytics');
  })

  it('Standards', () => {
    cy.get('otus-button-group > :nth-child(2)').click().should('contain','Standards').click();
    cy.wait(2000);
    cy.get('.fa-ellipsis-h').click()
    //cy.get('.mini-menu__dropdown').should('contain','Grading Scale').hover();
    //cy.get('.option-title').select('Points');
    Hey 
  })

})