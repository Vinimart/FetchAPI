const listarClientes = async () => {
    const response = await fetch('http://localhost:4000/clientes');
    return response.json();
};
