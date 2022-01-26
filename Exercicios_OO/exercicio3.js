class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }

    set atualizaRua(novaRua){
        this.rua = novaRua;
    }
    set atualizaBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set atualizaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set atualizaEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco('Alexandrina Joventina da Silva',
'Mangabeira', 'João Pessoa', 'PB');
endereco.atualizaRua = 'Telegrafista Chateubriand Brasil Filho';
console.log(endereco);