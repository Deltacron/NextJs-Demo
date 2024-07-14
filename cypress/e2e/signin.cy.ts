describe('Sign In resolution', () => {
  context('Mobile view', () => {
    before(() => {
      cy.viewport('iphone-x')
    })

    it('passes', () => {
      cy.visit('http://localhost:3000/login').wait(1500);
      cy.get('#loginBanner').should('not.be.visible');
    })
  })

  context('Ipad mini view', () => {
    before(() => {
      cy.viewport('ipad-mini')
    })

    it('passes', () => {
      cy.visit('http://localhost:3000/login').wait(1500);
      cy.get('#loginBanner').should('be.visible');
    })
  })
})

describe('Sign In', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login').wait(1500); // wait for the page to be loaded completely.
    cy.get('#email').type('yawar@deltacrontech.com');
    cy.get('#password').type('123456789');
    cy.get('#btnSignin').click();
  })
})