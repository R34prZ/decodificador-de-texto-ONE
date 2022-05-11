const elementoTexto = document.querySelector("#rawtext");
const btnCriptografar = document.querySelector(".criptografar-btn");

function criptografar() {
    let texto = elementoTexto.value;
    let texto_cifrado = texto;
    
    for (let i = 0; i < texto.length; i++) {

        switch (texto[i]) {
            case "e":
                texto_cifrado = texto_cifrado.replace("e", "enter");
                break;
            case "i":
                texto_cifrado = texto_cifrado.replace("i", "imes");
                break;
            case "a":
                texto_cifrado = texto_cifrado.replace("a", "ai");
                break;
            case "o":
                texto_cifrado = texto_cifrado.replace("o", "ober");
                break;
            case "u":
                texto_cifrado = texto_cifrado.replace("u", "ufat");
                break;
        }
    }

    mostrarResultado(texto_cifrado);
    console.log(texto_cifrado);
}

btnCriptografar.addEventListener("click", criptografar);