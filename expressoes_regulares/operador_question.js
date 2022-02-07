const question = /abacax?i/;
console.log(question.test("abacai"));
console.log(question.test("abacaxi"));

const padrao = /\d+\w?/;
console.log(padrao.test('123'));
console.log(padrao.test('123abc'));