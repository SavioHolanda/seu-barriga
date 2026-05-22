describe('Novo Usuário', () => {
    beforeEach(() => {
      cy.visit('/cadastro');
    });

    it.skip('Cenário 1: Realizar o cadastro de um novo usuário com sucesso', () => {
      const { nome, email, senha } = gerarUsuarioFake();

      cy.preencherNome(nome);
      cy.preencherEmailCadastro(email);
      cy.preencherSenhaCadastro(senha);
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastrarUsuario');
      cy.verificarAlerta('Usuário inserido com sucesso');
    });

    it('Cenário 2: Realizar o cadastro de um novo usuário com email já existente', () => {
      cy.preencherNome("Sávio Borges");
      cy.preencherEmailCadastro("savioborgesteste@teste.com");
      cy.preencherSenhaCadastro(1234);
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastrarUsuario');
      cy.verificarAlerta('Endereço de email já utilizado');
    });

    it.skip('Cenário 3: Realizar o cadastro de um novo usuário com email inválido', () => {
      cy.preencherNome("Sávio Borges");
      cy.preencherEmailCadastro("savioborgesteste");
      cy.preencherSenhaCadastro(1234);
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastro');
      cy.get('input[type="email"]').then(($input) => {
        const mensagem = $input[0].validationMessage;
        expect(mensagem).to.include('Inclua um "@" no endereço de e-mail');
      });
    });

    it('Cenário 4: Realizar o cadastro com o nome vazio', () => {
      cy.preencherEmailCadastro("savioborgesteste@teste.com");
      cy.preencherSenhaCadastro("1234");
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastrarUsuario');
      cy.contains('.alert', 'Nome é um campo obrigatório');
    });

    it('Cenário 5: Realizar o cadastro com o email vazio', () => {
      cy.preencherNome("Sávio Borges");
      cy.preencherSenhaCadastro("1234");
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastrarUsuario');
      cy.contains('.alert', 'Email é um campo obrigatório');
    });

    it('Cenário 6: Realizar o cadastro com a senha vazia', () => {
      cy.preencherNome("Sávio Borges");
      cy.preencherEmailCadastro("savioborgesteste@teste.com");
      cy.clicarCadastrarUsuario();
      cy.url().should('include', '/cadastrarUsuario');
      cy.contains('.alert', 'Senha é um campo obrigatório');
    });
});