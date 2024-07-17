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
    img.setAttribute('id', 'foto')

    if (mes < mesNasc){
        idade--;
    } 
    else if(mes === mesNasc && dia <= diaNasc){
        idade--;
    }
    if (fsex[0].checked){
        genero = "homem";
    }
    else if (fsex[1].checked){
        genero = "mulher";
    }
    res.style.textAllign = 'center';
    res.innerHTML = `Idade calculada: ${idade} anos. Gênero detectado: ${genero}`
    }
}

