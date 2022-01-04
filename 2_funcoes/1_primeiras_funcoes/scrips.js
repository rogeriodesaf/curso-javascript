function imprimeNoConsole (){
    console.log("Imprimindo no console")
}

imprimeNoConsole();

const imprime = function(){
    console.log( "Usando funções anônimas dentro de variáveis.")
}

imprime();

function funcaoComParametro (texto){
    console.log('Exemplo: '+texto);
}

funcaoComParametro('Este é o texto da função')

const imprime2 = imprimeNoConsole();