function adicionarHabilidade() {
    const input = document.getElementById('habilidade-input');
    const lista = document.getElementById('habilidades-lista');
    
    // Pega o valor do input e remove espaços em branco extras
    const nomeHabilidade = input.value.trim();

    // 1. Verifica se o campo não está vazio
    if (nomeHabilidade === '') {
        // Se estiver vazio, não faz nada
        return;
    }

    // 2. Cria a estrutura completa da "tag"
    
    // Cria o elemento <li> que será a tag
    const listItem = document.createElement('li');
    listItem.className = 'habilidade-tag'; // Aplica nosso estilo CSS
    
    // Cria um <span> para o texto da habilidade
    const textSpan = document.createElement('span');
    textSpan.textContent = nomeHabilidade;

    // Cria o botão de remover ('x')
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'btn-close'; // Classe padrão do Bootstrap para o 'x'
    removeButton.setAttribute('aria-label', `Remover ${nomeHabilidade}`);

    // 3. Adiciona a funcionalidade de remover
    removeButton.onclick = function() {
        // Quando o botão 'x' for clicado, remove a tag inteira (o <li>)
        listItem.remove();
    };

    // 4. Monta a "tag"
    listItem.appendChild(textSpan);      // Adiciona o texto dentro da tag
    listItem.appendChild(removeButton); // Adiciona o botão 'x' dentro da tag
    
    // 5. Adiciona a tag pronta à lista na tela
    lista.appendChild(listItem);

    // 6. Limpa o campo de input e devolve o foco para ele
    input.value = '';
    input.focus();
}

/**
 * Adiciona um "ouvinte" para a tecla "Enter" no campo de input.
 * Isso permite que o usuário adicione uma habilidade pressionando Enter,
 * sem precisar de clicar no botão "Adicionar".
 */
document.getElementById('habilidade-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Impede que o formulário seja submetido ao pressionar Enter
        event.preventDefault(); 
        // Chama a nossa função de adicionar habilidade
        adicionarHabilidade();
    }
});