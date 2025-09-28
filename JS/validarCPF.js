function checarCPF(input) {
    const cpf = input.value;
    const feedbackDiv = document.getElementById('feedback-cpf');
    
    // Se o campo estiver vazio, limpa a formatação e a mensagem.
    if (cpf.trim() === '') {
        input.classList.remove('is-valid', 'is-invalid');
        feedbackDiv.textContent = '';
        return;
    }

    if (validarEstruturaCPF(cpf)) {
        // CPF é VÁLIDO
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        feedbackDiv.textContent = ''; // Limpa a mensagem de erro
    } else {
        // CPF é INVÁLIDO
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        feedbackDiv.textContent = 'CPF inválido. Por favor, verifique os dígitos.';
    }
}
function validarEstruturaCPF(cpf) {
    // 1. Remove todos os caracteres que não são dígitos
    const cpfLimpo = cpf.replace(/\D/g, '');

    // 2. Verifica se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        return false;
    }

    // 3. Verifica se todos os dígitos são iguais (ex: 111.111.111-11), o que é inválido
    if (/^(\d)\1+$/.test(cpfLimpo)) {
        return false;
    }
    
    // Converte a string em um array de números
    const digitos = cpfLimpo.split('').map(Number);

    // --- CÁLCULO DO PRIMEIRO DÍGITO VERIFICADOR ---
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += digitos[i] * (10 - i);
    }
    
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

    // 4. Verifica se o primeiro dígito verificador está correto
    if (digitoVerificador1 !== digitos[9]) {
        return false;
    }

    // --- CÁLCULO DO SEGUNDO DÍGITO VERIFICADOR ---
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += digitos[i] * (11 - i);
    }

    resto = 11 - (soma % 11);
    let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
    
    // 5. Verifica se o segundo dígito verificador está correto
    if (digitoVerificador2 !== digitos[10]) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;
}