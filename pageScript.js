const formulario = document.getElementById("formulario");

const campoNome = document.getElementById("nome");
const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");

const resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    // Obtendo os valores digitados
    const nome = campoNome.value.trim();
    const peso = Number(campoPeso.value);
    const altura = Number(campoAltura.value);

    // Validando as informações
    if (nome === "" || peso <= 0 || altura <= 0 ||
        !Number.isFinite(peso) || !Number.isFinite(altura)) {

        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Realizando o cálculo do IMC
    const imc = peso / (altura * altura);

    // Formatando o resultado para duas casas decimais
    const imcFormatado = imc.toFixed(2);

    // Exibindo o resultado na página
    resultado.innerHTML = `
        <p>Olá, <strong>${nome}!</strong></p>
        <p>Seu IMC calculado é:</p>
        <strong>${imcFormatado}</strong>
    `;

});