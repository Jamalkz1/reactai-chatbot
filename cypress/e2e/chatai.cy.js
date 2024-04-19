describe('response test', () => {
  it('should validate response textarea is initially empty and updates after clicking generate response button', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Response"]').should('have.value', '');

    cy.get('[data-cy="generatebutton"]').click();

    cy.wait(3000);
    cy.get('[data-cy="Response"]').should('not.have.value', '');
  })
})