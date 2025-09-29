function login(event) {
    event.preventDefault(); // Impede o form de recarregar a página

    const user = document.getElementById("email").value;
    const pass = document.getElementById("senha").value;

    // Usuário e senha fixos (apenas exemplo)
    const usuarioCorreto = "teste@teste";
    const senhaCorreta = "teste";

    if (user === usuarioCorreto && pass === senhaCorreta) {
        showToast("Sucesso", "Login realizado com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "PaginaDeHome.html";
        }, 1000); // espera 1.5s pra mostrar o toast antes do redirecionamento
    } else {
        showToast("Erro", "Usuário ou senha incorretos!", "danger");
    }
}

function showToast(title, message, type = "info") {
    const container = document.getElementById("toast-container");
    const template = document.getElementById("toast-template");

    const toastEl = template.cloneNode(true);
    toastEl.id = ""; // remove id duplicado
    toastEl.classList.add(`text-bg-${type}`);

    toastEl.querySelector(".toast-title").innerText = title;
    toastEl.querySelector(".toast-body").innerText = message;

    container.appendChild(toastEl);

    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    // Remove o toast depois de um tempo
    toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}
