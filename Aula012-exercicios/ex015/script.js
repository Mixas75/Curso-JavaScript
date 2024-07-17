function verificar() {
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();
  let dataNascInput = document.getElementById("data");
  let dataNascValue = dataNascInput.value;
  let dataNasc = new Date(dataNascValue);
  let res = document.querySelector("div#res");
  let genero = "";
  let faixa = "";

  if (dataNasc > data) {
    alert("Erro! Data de nascimento não pode ser maior que a data atual.");
    return;
  } else if (dataNascValue === "") {
    alert("Erro! Data de nascimento é obrigatória.");
    return;
  } else {
    let fsex = document.getElementsByName("sex");
    let anoNasc = dataNasc.getFullYear();
    let mesNasc = dataNasc.getMonth();
    let diaNasc = dataNasc.getDate();
    let idade = ano - anoNasc;
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('alt', 'Foto do gênero');

    if (mes < mesNasc){
        idade--;
    } 
    else if(mes === mesNasc && dia <= diaNasc){
        idade--;
    }
    if (fsex[0].checked){
        genero = "homem";
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'crianca-menino.png')
            faixa = "Criança";
          } else if (idade < 18) {
            img.setAttribute('src', 'adolescentem.png')
            faixa = "Adolescente";
          }
          else if (idade < 60) {
            img.setAttribute('src', 'adulto.png')
            faixa = "Adulto";
          } else {
            img.setAttribute('src', 'idoso.png')
            faixa = "Idoso";
          }
        }
    else if (fsex[1].checked){
        genero = "mulher";
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'crianca-menina.png')
            faixa = "Criança";
          } else if (idade < 18) {
            img.setAttribute('src', 'adolescentef.png')
            faixa = "Adolescente";
          }
          else if (idade < 60) {
            img.setAttribute('src', 'adulta.png')
            faixa = "Adulta";
          } else {
            img.setAttribute('src', 'idosa.png')
            faixa = "Idosa";
          }
    }
    res.style.textAlign = 'center';
    res.innerHTML = "";
   
    let faixaText = document.createTextNode(`${idade} anos: ${faixa}`);
    let p = document.createElement('p');
    p.appendChild(faixaText);
    res.appendChild(p);
    res.appendChild(img);
    }
}

