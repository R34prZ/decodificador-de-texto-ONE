const btnDescriptografar = document.querySelector(".descriptografar-btn");

function descriptografar () {
    let texto = elementoTexto.value.toLowerCase();
    let texto_plano = texto;

    const padraoTroca = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < padraoTroca.length; i++) {
        if (texto.includes(padraoTroca[i][1])) {
            // troca pela letra original para descriptografar
            texto_plano = texto_plano.replaceAll(padraoTroca[i][1], padraoTroca[i][0]);
        }
    }

    mostrarResultado(texto_plano);
    console.log(texto_plano);
    elementoTexto.value = "";
}

btnDescriptografar.addEventListener("click", descriptografar);