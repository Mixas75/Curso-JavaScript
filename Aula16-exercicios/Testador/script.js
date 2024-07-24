let previousNumbers = [];

function inserir() {
  let numero = document.getElementById("entrada");
  let resultado = document.getElementById("resultado");
  if (numero.value === "") {
    alert("Insira um número para analisar!");
    return;
  } else if (numero.value > 100) {
    alert("Insira um número menor que 100");
    return;
  }
  if (previousNumbers.includes(numero.value)) {
    alert("Você já inseriu este número! Escolha outro.");
    return;
  }
  previousNumbers.push(parseInt(numero.value));
  resultado.innerHTML += `Você inseriu o número ${numero.value}<br>`;
  numero.value = "";
  return;
}
function analisar() {
  let biggerNumber = Math.max(...previousNumbers);
  let smallerNumber = Math.min(...previousNumbers);
  let sum = previousNumbers.reduce((a, b) => a + b, 0);
  let average = sum / previousNumbers.length;
  let clean = document.getElementById("limpar");
  clean.hidden = false;
  analise.innerHTML = "";
  analise.innerHTML += `O total de números inseridos é: ${previousNumbers.length}<br>`;
  analise.innerHTML += `O maior número inserido é: ${biggerNumber}<br>`;
  analise.innerHTML += `O menor número inserido é: ${smallerNumber}<br>`;
  analise.innerHTML += `A soma dos números inseridos é: ${sum}<br>`;
  analise.innerHTML += `A média dos números inseridos é: ${average}<br>`;
  return
}
function limpar() {
    let clean = document.getElementById("limpar");
    previousNumbers = [];
    resultado.innerHTML = "";
    analise.innerHTML = "";
    clean.hidden = true;
    return
}
