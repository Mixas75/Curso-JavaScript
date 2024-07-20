function contar() {
  let ini = document.getElementById("ini");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("res");

  if (ini.value === "") {
    alert("Insira um valor inicial");
    return;
  } else if (fim.value === "") {
    alert("Insira um valor final");
    return;
  } else if (passo.value === "") {
    alert("Você não colocou o passo! Será considerado o passo igual a 1.");
  }

  let p = passo.value === "" ? 1 : Number(passo.value);

  let i = Number(ini.value);
  let f = Number(fim.value);

  res.innerHTML = "Contando: <br>";
  if (i < f) {
    for (let cont = i; cont <= f; cont += p) {
      res.innerHTML += ` \u{1F449} ${cont}`;
    }
  }
  else{
    for (let cont = i; cont >= f; cont -= p) {
        res.innerHTML += ` \u{1F449} ${cont}`
  }
}
  res.innerHTML += ` \u{1F3C1}`;
}
