class Pessoa {
    constructor(nome, profissao) {
        this.nome = nome;
        this.profissao = profissao;
    }
    get getProfissao() {
        return `A profissão de ${this.nome} é ${this.profissao}; `
    }
    set setProfissao(profissao) {
        if (typeof profissao != 'string') {
            console.log('Insira uma profissão válida.');
            return;
        }
        this.profissao = profissao;
    }
};

Pessoa.prototype.situacaoAtual = 'Empregado';

const p1 = new Pessoa('Rogério', 'Programador');
const p2 = new Pessoa('João', 'Vaqueiro');

console.log(p2);
p2.setProfissao = "Cachaceiro";
console.log('Profissão alterada')
console.log(p2);
console.log(p2.getProfissao);