<reference types="cypress" />

const username = 'taylor@wilsonlomax.com';
const password = 'Otu$SDET123'

// Accessing Assessment Screen

describe('Accessing Assessment Screen', () => {
  
before(() => {
  cy.login(username, password);

})

it('Login Successful', () => {
  cy.find('.user-profile__user-name').should('equal', 'Taylor');
})

});

// Taking an Assessment