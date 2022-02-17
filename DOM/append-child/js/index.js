let novoElemento = document.createElement("p");
let texto = document.createTextNode("Novo texto");

novoElemento.appendChild(texto);


let p = document.querySelector("#paragrafo-dois");
let pai = p.parentNode;

pai.appendChild(novoElemento);