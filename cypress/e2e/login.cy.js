describe('Login', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('Cenário 1: Realizar o login com sucesso', () => {
      cy.preencherEmail('savioborgesteste@teste.com');
      cy.preencherSenha('1234');
      cy.clicarLogin();
      cy.url().should('include', '/logar');
      cy.verificarAlerta('Bem vindo, Sávio Borges!');
    });

    it('Cenário 2: Realizar o login com email e senha inválidos', () => {
      cy.preencherEmail('xsavioborgesteste@teste.com');
      cy.preencherSenha('x1234');
      cy.clicarLogin();
      cy.url().should('include', '/logar');
      cy.verificarAlerta('Problemas com o login do usuário');
    });

    it('Cenário 3: Realizar o login com email inválido', () => {
      cy.preencherEmail('xsavioborgesteste@teste.com');
      cy.preencherSenha('1234');
      cy.clicarLogin();
      cy.url().should('include', '/logar');
      cy.verificarAlerta('Problemas com o login do usuário');
    });

    it('Cenário 4: Realizar o login com senha inválida', () => {
      cy.preencherEmail('savioborgesteste@teste.com');
      cy.preencherSenha('xstefanini');
      cy.clicarLogin();
      cy.url().should('include', '/logar');
      cy.verificarAlerta('Problemas com o login do usuário');
    });

    it('Cenário 5: Realizar o login com email e senha vazios', () => {
      cy.clicarLogin();
      cy.url().should('include', '/logar');
      cy.verificarAlerta('Email é um campo obrigatório');
      cy.verificarAlerta('Senha é um campo obrigatório');    
    });
  });