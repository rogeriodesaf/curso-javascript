const dia = /\d\d/;
console.log(dia.test(2021) && '2021'.length == 2);

const palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test('ca') );