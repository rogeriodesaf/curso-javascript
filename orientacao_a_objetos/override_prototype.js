class Pessoa {
    constructor(nome,profissao, hobbiee){
        this.nome = nome;
        this.profissao = profissao;
        this.hobbiee = hobbiee;
    }
}

Pessoa.prototype.hobbie = function(){
    console.log(`${this.nome} gosta de ${this.hobbiee}`);
}
Pessoa.prototype.profissao = 'Profissão não informada';

const p1 = new Pessoa('Rogério', 'Programador','tocar guitarra.');
p1.hobbie();
const p2 = new Pessoa('Lohana', 'Fonoaudióloga', 'cantar.');
p2.hobbie();

console.log(p1.profissao);
console.log(Pessoa.prototype.profissao);