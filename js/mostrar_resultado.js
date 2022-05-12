const elementoResultado = document.querySelector(".result");
const divResultadoPadrao = document.querySelector(".result-default");
const divResultadoParagrafo = document.querySelector(".result-paragraph");

function mostrarResultado (texto) {
    // torna a imagem padrão do resultado invísivel e adiciona o texto convertido
    if (elementoTexto.value.length > 0) {
        divResultadoPadrao.classList.add("invisible");
        divResultadoParagrafo.innerHTML = `<p class="paragraph" id="result">${texto}</p>`;
    }
    else {
        // mostra novamente o resultado padrão caso não haja entrada e retira o texto anterior
        divResultadoPadrao.classList.remove("invisible");
        divResultadoParagrafo.innerHTML = "";
    }
}