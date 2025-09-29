document.addEventListener('DOMContentLoaded', function() {

    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        const cpfMaskOptions = {
            mask: '000.000.000-00'
        };
        const cpfMask = IMask(cpfInput, cpfMaskOptions);
    }

    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        const telefoneMaskOptions = {
            mask: [
                { mask: '(00) 0000-0000' },
                { mask: '(00) 00000-0000' }
            ]
        };
        const telefoneMask = IMask(telefoneInput, telefoneMaskOptions);
        
        telefoneInput.addEventListener('input', function() {
        // Remove feedback anterior
        telefoneInput.classList.remove('is-valid', 'is-invalid');

        // Pega apenas os números digitados (remove parênteses, traço, espaços)
        const numero = telefoneInput.value.replace(/\D/g, '');

        if (numero.length > 0) {
            if (numero.length === 10 || numero.length === 11) {
                // Número válido → borda verde
                telefoneInput.classList.add('is-valid');
            } else {
                // Número incompleto ou inválido → borda vermelha
                telefoneInput.classList.add('is-invalid');
            }
        }
    });
   }

    const emailInput = document.getElementById('email');
    if (emailInput) {
        const emailMaskOptions = {
            // Usamos uma expressão regular (RegExp) para validar o formato do email.
            // Esta expressão verifica se o texto tem o padrão "algo@algo.algo"
            mask: /^\S*@?\S*$/
        };
        const emailMask = IMask(emailInput, emailMaskOptions);
        
        // Adicionamos um "ouvinte" para dar feedback visual enquanto o utilizador digita
        emailInput.addEventListener('input', function() {
            // Expressão regular mais completa para uma validação mais robusta
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Remove o feedback anterior
            emailInput.classList.remove('is-valid', 'is-invalid');

            // Se o campo não estiver vazio, verifica se o formato é válido
            if (emailInput.value) {
                if (emailRegex.test(emailInput.value)) {
                    // Formato VÁLIDO: adiciona a borda verde
                    emailInput.classList.add('is-valid');
                } else {
                    // Formato INVÁLIDO: adiciona a borda vermelha
                    emailInput.classList.add('is-invalid');
                }
            }
        });
    }

});
