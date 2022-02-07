const telefone =  /\d{4,5}-\d{4}/;
console.log(telefone.test('99858-9459'))

const cpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
console.log(cpf.test('053.545.674-32'));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(tel.test('(83)99858-9499'))

const cpf2 = /\d{3}.\d{3}.\d{3}-\d{2}/;
console.log(cpf2.test('053.545.367-32'))