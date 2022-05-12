const elementoResultado = document.querySelector(".result");
const divResultadoPadrao = document.querySelector(".result-default");
const divResultadoParagrafo = document.querySelector(".result-paragraph");

function mostrarResultado (texto) {
    if (elementoTexto.value.length > 0) {
        divResultadoPadrao.classList.add("invisible");
        divResultadoParagrafo.innerHTML = `<p class="paragraph" id="result">${texto}</p>`;
    }
    else {
        divResultadoPadrao.classList.remove("invisible");
        divResultadoParagrafo.innerHTML = "";
    }
}