describe('Contas', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Cenário 1: Realizar o cadastro de uma nova conta com sucesso', () => {
        cy.login('savioborgesteste@teste.com', '1234');
        cy.clicarCadastrarConta();
        cy.preencherNomeConta('Conta 1');
        //cy.preencherEmail('conta1@teste.com');
        //cy.preencherSenha('1234');
        //cy.clicarCadastrarUsuario();
    });
});