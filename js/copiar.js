const btnCopiar = document.querySelector(".copy-btn");
let elementoConfirmacao = document.querySelector(".copy-confirm");

// seleciona o texto convertido e o copia para o clipboard e para a caixa de texto
btnCopiar.addEventListener("click", function () {
    let textoCopiar = document.querySelector("#result").textContent;
    navigator.clipboard.writeText(textoCopiar);
    elementoTexto.value = textoCopiar;

    let pConfirmacao = document.createElement("p");
    pConfirmacao.textContent = "Texto Copiado!";
    pConfirmacao.classList.add("paragraph");
    elementoConfirmacao.appendChild(pConfirmacao);

    // mostra o feedback de que o texto foi copiado por 2seg e desaparece
    setTimeout(mostrarConfirmacaoCopia, 2000);
    
});

function mostrarConfirmacaoCopia() {
    elementoConfirmacao.innerHTML = "";
}
