
const nome = 'Rogério'  /*escopo global */


function retornaNome() {
    const nome = 'Lohana'
    return function () {
        return nome
    };
};

const funcao = retornaNome();
/* A função exibirá a variável nome de dentro do seu escopo léxico*/
console.log(funcao());


function retornaNome2() {
    return function () {
        return nome
    };
};

const funcao2 = retornaNome2()
/* Nesse caso será chamada a variável que está no escopo global*/
console.log(funcao2()) 