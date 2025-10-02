function adicionarHabilidade() {
    const input = document.getElementById('habilidade-input');
    const lista = document.getElementById('habilidades-lista');

    const nomeHabilidade = input.value.trim();

    if (nomeHabilidade === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'habilidade-tag';

    const textSpan = document.createElement('span');
    textSpan.textContent = nomeHabilidade;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'btn-close';
    removeButton.setAttribute('aria-label', `Remover ${nomeHabilidade}`);


    removeButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(textSpan);
    listItem.appendChild(removeButton);

    lista.appendChild(listItem);

    input.value = '';
    input.focus();
}

document.getElementById('habilidade-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarHabilidade();
    }
});