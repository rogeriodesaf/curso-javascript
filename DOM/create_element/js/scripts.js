let lista = document.createElement('ul');




for (let i = 0; i < 5; i++) {
    let item = document.createElement('li');

    let texto = document.createTextNode('Alguma coisa '+ (i+1));
    item.appendChild(texto);
    lista.appendChild(item)
};

let container = document.getElementById('nova-lista');
container.appendChild(lista);