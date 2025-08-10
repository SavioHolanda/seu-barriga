// Login
Cypress.Commands.add('preencherEmail', (email) => {
  cy.get('#email').type(email);
});

Cypress.Commands.add('preencherSenha', (senha) => {
  cy.get('#senha').type(senha);
});

Cypress.Commands.add('clicarLogin', () => {
  cy.get('.btn').click();
});

Cypress.Commands.add('verificarAlerta', (mensagem) => {
  cy.contains('.alert', mensagem);
});

// Novo Usuário
Cypress.Commands.add('preencherNome', (nome) => {
  cy.get('#nome').type(nome);
});

Cypress.Commands.add('preencherEmailCadastro', (email) => {
  cy.get('#email').type(email);
});

Cypress.Commands.add('preencherSenhaCadastro', (senha) => {
  cy.get('#senha').type(senha);
});

Cypress.Commands.add('clicarCadastrarUsuario', () => {
  cy.get('.btn').click();
});