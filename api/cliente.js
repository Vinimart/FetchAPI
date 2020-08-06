// GET
const listarClientes = async () => {
    const response = await fetch('http://localhost:4000/clientes');
    return response.json();
};

// POST
const cadastrarClientes = async (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf,
    });

    const response = await fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: json,
    });

    return response.body
};