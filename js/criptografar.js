const elementoTexto = document.querySelector("#rawtext");
const btnCriptografar = document.querySelector(".criptografar-btn");

function criptografar() {
    let texto = elementoTexto.value.toLowerCase();
    let texto_cifrado = texto;

    // matriz contendo o valor a ser trocado e o que deve substituí-lo
    const padraoTroca = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for (let i = 0; i < padraoTroca.length; i++) {
        // checa se o texto de entrada inclui as letras que devem ser trocadas
        if (texto.includes(padraoTroca[i][0])) {
            // troca as letras
            texto_cifrado = texto_cifrado.replaceAll(padraoTroca[i][0], padraoTroca[i][1]);
        }
    }

    mostrarResultado(texto_cifrado);
    console.log(texto_cifrado);
    elementoTexto.value = "";
}

btnCriptografar.addEventListener("click", criptografar);