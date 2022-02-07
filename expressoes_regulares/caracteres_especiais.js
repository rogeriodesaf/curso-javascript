const pontoRegex = /./;

console.log(pontoRegex.test("aceita tudo")) ;

const pontoDminusculo = /\d/;
console.log(pontoDminusculo.test("É equivalente ao [0-9], verifica se existem números."));

const dMaisculoRegex = /\D/;
console.log(dMaisculoRegex.test('é a negação do d minúsculo, só dará false se só tiver números'))
console.log(dMaisculoRegex.test('123'));


const sMinusculo = /\s/;
console.log(sMinusculo.test('verificaseexistemespaçosnafrase,nesseexemplooresultadoserafalse'));

const w = /\w/;
console.log(w.test('Só aceita caracteres alfanuméricos'));
console.log(w.test(' '));
