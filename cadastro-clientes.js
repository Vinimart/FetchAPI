const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]')
    const cpf = event.target.querySelector('[data-cpf]')

    cadastrarClientes(nome.value, cpf.value)
});
