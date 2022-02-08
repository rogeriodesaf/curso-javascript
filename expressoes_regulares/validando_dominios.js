const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test('www.casa.com.br'));
console.log(validaDominio.test('casa.com.erqrt'));