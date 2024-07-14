describe('Sign up', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000').wait(1500); // wait for the page to be loaded completely.
    cy.get('#name').type('Yawar shah');
    cy.get('#email').type('yawar@deltacrontech.com');
    cy.get('#password').type('123456789');
    cy.get('#teamName').type('Loony Tunes');
    cy.get('#team-role').select("Director");
    cy.get('#btnSignup').click();

    cy.wait(1000);
    cy.get('#btnContinue').click()
  })
})