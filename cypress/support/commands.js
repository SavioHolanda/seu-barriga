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

// Função para realizar login para reutilização nos testes
Cypress.Commands.add('login', (email, senha) => {
  cy.preencherEmail(email);
  cy.preencherSenha(senha);
  cy.clicarLogin();
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

//contas
Cypress.Commands.add('clicarCadastrarConta', () => {
  cy.get('.dropdown-toggle').click();
  cy.get('.dropdown-menu > :nth-child(1) > a').click();
});

Cypress.Commands.add('preencherNomeConta', (nome) => {
  cy.get('#nome').type(nome);
});