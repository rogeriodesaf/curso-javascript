const reg = new RegExp('bola');

console.log(reg.test('tem bola?')) ;// retornará true
console.log(reg.test('carro')); // retornará false


const reg1 = /bola/

console.log(reg.test('tem bola?')) ;// retornará true
console.log(reg.test('carro')); // retornará false

let frase = 'tem bola nesta frase'

console.log(reg.test(frase));
