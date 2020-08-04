fetch('http://localhost:4000/clientes')
    .then((response) => response.json())
    .then((json) => console.log(json));

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

/*infoCliente.forEach((index) => {
    corpoTabela.appendChild(exibeCliente(index.cpf, index.nome));
});*/
