const verificadorCpfInvalido = (cpf) => {
    const cpfInvalido = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000',
    ];

    // Procura o cpf dentro do array cpfInvalido
    // Retorna false caso o cpf seja inválido
    return cpfInvalido.indexOf(cpf) === -1;
};

const somaNumerosCpf = (cpf, totalDigitos, peso) => {
    let soma = 0;

    for (let index = 1; index <= totalDigitos; index++) {
        soma += parseInt(cpf.substring(index - 1, index)) * (peso - index);
    }

    return soma;
};

const verificadorDigito = (cpf, totalDigitos, peso, digitoVerificador) => {
    const soma = somaNumerosCpf(cpf, totalDigitos, peso, digitoVerificador);
    const resto = (soma * 10) % 11;

    return resto;
};

const verificadorPrimeiroDigito = (cpf) => {
    const peso = 11;
    const totalDigitos = 9;
    const digitoVerificador = parseInt(cpf.substring(9, 10));

    return verificadorDigito(cpf, totalDigitos, peso, digitoVerificador);
};

const verificadorSegundoDigito = (cpf) => {
    const peso = 12;
    const totalDigitos = 10;
    const digitoVerificador = parseInt(cpf.substring(10, 11));

    return verificadorDigito(cpf, totalDigitos, peso, digitoVerificador);
};

const validadorCpf = (cpf) => {
    return (
        verificadorPrimeiroDigito(cpf) &&
        verificadorSegundoDigito(cpf) &&
        verificadorCpfInvalido(cpf)
    );
};
