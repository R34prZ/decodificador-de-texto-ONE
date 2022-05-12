const btnCopiar = document.querySelector(".copy-btn");
let elementoConfirmacao = document.querySelector(".copy-confirm");

btnCopiar.addEventListener("click", function () {
    let textoCopiar = document.querySelector("#result").textContent;
    navigator.clipboard.writeText(textoCopiar);
    elementoTexto.value = textoCopiar;

    let pConfirmacao = document.createElement("p");
    pConfirmacao.textContent = "Texto Copiado!";
    pConfirmacao.classList.add("paragraph");
    elementoConfirmacao.appendChild(pConfirmacao);

    // mostra o feedback de que o texto foi copiado
    setTimeout(mostrarConfirmacaoCopia, 3000);
    
});

function mostrarConfirmacaoCopia() {
    elementoConfirmacao.innerHTML = "";
}
