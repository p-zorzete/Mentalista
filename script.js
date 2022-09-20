var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var resultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (tentativas < 2) {
    if (chute == numeroSecreto) {
      resultado.innerHTML =
        "Vôce Acertou!Atualize para ter um novo número para advinhar.";
    } else if (chute < numeroSecreto && chute > 0) {
      resultado.innerHTML = "Vôce errou! O valor é maior";
    } else if (chute > numeroSecreto && chute < 10) {
      resultado.innerHTML = "Vôce errou! O valor é menor.";
    } else {
      resultado.innerHTML = "Coloque um valor entre 0 e 10";
    }
    tentativas++;
  } else if (tentativas == 2) {
    if (chute == numeroSecreto) {
      resultado.innerHTML =
        "Vôce Acertou!Atualize para ter um novo número para advinhar.";
    } else {
      resultado.innerHTML = "As tentativas acabaram, atualize para ter novas.";
    }
  }
}