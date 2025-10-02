function login(event) {
    event.preventDefault();

    const user = document.getElementById("email").value;
    const pass = document.getElementById("senha").value;

    const usuarioCorreto = "teste@teste";
    const senhaCorreta = "teste";

    if (user === usuarioCorreto && pass === senhaCorreta) {
        showToast("Sucesso", "Login realizado com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "PaginaDeHome.html";
        }, 1000);
    } else {
        showToast("Erro", "Usuário ou senha incorretos!", "danger");
    }
}

function showToast(title, message, type = "info") {
    const container = document.getElementById("toast-container");
    const template = document.getElementById("toast-template");

    const toastEl = template.cloneNode(true);
    toastEl.id = ""; 
    toastEl.classList.add(`text-bg-${type}`);

    toastEl.querySelector(".toast-title").innerText = title;
    toastEl.querySelector(".toast-body").innerText = message;

    container.appendChild(toastEl);

    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}
