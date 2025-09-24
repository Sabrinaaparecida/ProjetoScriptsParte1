function validarCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]+/g, '');

        const feedback = document.getElementById('feedback-cpf');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            feedback.textContent = 'O CPF deve conter 11 dígitos.';
            return false;
        }

        // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
        if (/^(\d)\1{10}$/.test(cpf)) {
            feedback.textContent = 'CPF inválido (sequência de dígitos repetidos).';
            return false;
        }

        // Valida o primeiro dígito verificador
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(9, 10))) {
            feedback.textContent = 'CPF inválido.';
            return false;
        }

        // Valida o segundo dígito verificador
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            feedback.textContent = 'CPF inválido.';
            return false;
        }

        // Se passar por todas as verificações, o CPF é válido
        feedback.textContent = 'CPF válido!';
        feedback.style.color = 'green';
        return true;
    }