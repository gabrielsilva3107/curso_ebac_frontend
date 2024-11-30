describe('Teste da Agenda de Contatos', () => {
  beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um contato', () => {
      cy.get('[type="text"]').type('Gabriel Soares');
      cy.get('[type="email"]').type('gabriel@email.com');
      cy.get('[type="tel"]').type('16991364400');
      cy.get('.adicionar').click();

      cy.contains('Gabriel Soares').should('be.visible');
      cy.contains('gabriel@email.com').should('be.visible');
      cy.contains('16991364400').should('be.visible');
  });

  it('Deve editar um contato', () => {
      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type('Contato Editado');
      cy.get('[type="email"]').clear().type('editado@email.com');
      cy.get('[type="tel"]').clear().type('11111111111');
      cy.get('.alterar').click();

      cy.contains('Contato Editado').should('be.visible');
      cy.contains('editado@email.com').should('be.visible');
      cy.contains('11111111111').should('be.visible');
  });

  it('Deve remover o primeiro contato', () => {
    cy.get('.delete').first().click();

      cy.contains('Contato Editado').should('not.exist');
  });
});
