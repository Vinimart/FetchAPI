const corpoTabela = document.querySelector('[data-conteudo-tabela]');

const exibeCliente = (cpf, nome) => {
    const row = document.createElement('tr');

    const templateCliente = `
	<td>${cpf}</td>
	<td>${nome}</td>
`;

    row.innerHTML = templateCliente;

    return row;
};

listarClientes().then((exibe) => {
    exibe.forEach((index) => {
        corpoTabela.appendChild(exibeCliente(index.cpf, index.nome));
    });
});
