let numeros = [0,1,2,3,4,5,6]

console.log(numeros.slice(4));
/* Pega do indice indicado até o final do array */

console.log(numeros.slice(0,4));
/*pega do indice do primeiro parâmetro até o indice anterior ao do último parâmetro. */

console.log(numeros.slice(0,1));
/* pega o elemento do índice 0 */

console.log(numeros.slice(1,2));
/* pega o elemento do indice 1 */

console.log(numeros.slice(-2));
console.log(numeros.slice(-3));
console.log(numeros.slice(-0));
console.log(numeros.slice(0,-3));
