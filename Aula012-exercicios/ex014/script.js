function loading() {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();

  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let greeting = document.getElementById("greeting");

  msg.innerHTML = `Agora são: <strong>${hours}:${minutes}h</strong>`;
  if (hours >= 0 && hours < 12) {
    img.src = "Imagens/manha.png";
    document.body.style.background = "#a88356";
    greeting.innerHTML = "Bom dia!";
  } else if (hours >= 12 && hours < 18) {
    img.src = "Imagens/tarde.png";
    document.body.style.background = "#daa86d";
    greeting.innerHTML = "Boa tarde!";
  } else {
    img.src = "Imagens/noite2.png";
    document.body.style.background = "#464781";
    greeting.innerHTML = "Boa noite!";
  }
}
