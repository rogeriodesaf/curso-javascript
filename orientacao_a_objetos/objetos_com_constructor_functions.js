function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

/* A palavra new vai criar um objeto vazio {}
atrela a palavra this dentro da função ao objeto,, ex:
const p2 = {}
p2.nome = 'Rogério' 
O this corresponderia ao p2, mas porque usamos a palavra this?
Porque o this vai mudar de pessoa para pessoa.
A palavra new tambem retorna o this, por isso não usamos return. */
const p1 = new Pessoa ('Rogério', 'Sá'); /* mesma coisa de criar um objeto literal */
console.log(p1.nome);
const p2 = new Pessoa ('Lohana', 'Rodrigues');
console.log(p2.nome);