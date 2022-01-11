function imprimeIdade (idade){
    console.log(`Você tem ${idade} anos. `);
}
imprimeIdade(37);

/* outra maneira */

const idade = function(idade){
    console.log(`Você tem ${idade} anos.`)
}

idade(35);