function adicionarHabilidade() {
            const input = document.getElementById('habilidade-input');
            const lista = document.getElementById('habilidades-lista');
            const habilidade = input.value.trim();

            if (habilidade !== '') {
                const li = document.createElement('li');
                li.textContent = habilidade;
                lista.appendChild(li);
                input.value = ''; // Limpa o campo de entrada
            }
        }