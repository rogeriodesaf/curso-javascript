const reg = new RegExp('bola');

console.log(reg.test('tem bola?')) ;// retornarĂ¡ true
console.log(reg.test('carro')); // retornarĂ¡ false


const reg1 = /bola/

console.log(reg.test('tem bola?')) ;// retornarĂ¡ true
console.log(reg.test('carro')); // retornarĂ¡ false

let frase = 'tem bola nesta frase'

console.log(reg.test(frase));
