/// <reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123'


describe('Class Test Scripts', () => {
  
before(() => {
  cy.login(username, password);

})

it('Access Classes Page', () => {
  cy.get(':nth-child(2) > a > .nav-item-text').click();
  cy.get('.title-row').should('contain','Classes');
})

it('Class Interfaces with the Class Board ', () => {
  cy.get('.class-card__title > .ng-star-inserted').click();
  cy.get('.ot-page-header-title h1').should('contain','Class Board');
})

it('Search Functionality Brings Back Class Board Post', () => {
  cy.get('input[type="search"]').click().type('Welcome');
  cy.get('h3').should('contain', 'Welcome!');
  cy.get('input[type="search"]').click().clear();
})

it('Search Returns No Class Posts when Search Value Does Not Exist', () => {
  cy.get('input[type="search"]').click().type('value');
  cy.get('h3').should('not.exist')
})

});