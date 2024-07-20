function tabuada() {
  let num = document.getElementById("num");
  let res = document.getElementById("result");
  let ini = 1;
  res.innerHTML = "";
  for (ini; ini <= 10; ini++) {
    let option = document.createElement("option");
    option.text = `${ini} x ${num.value} = ${num.value * ini}`;
    option.value = `tab${ini}`;
    res.appendChild(option);
  }
  res.size = res.options.length;
}
