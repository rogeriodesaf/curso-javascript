function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}
const p1 = new Pessoa('Rogério', 'Sá');
console.log(p1.nomeCompleto());

const p2 = new Pessoa('Lohana', 'Rodrigues');
console.log(p2.nomeCompleto());