class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        this.ligado = true
    }
    desligar() {
        if (this.ligado == true) {
            this.ligado = false;
        }

    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, marca) {
        super(nome)
        this.marca = marca
    }
}

const d1 = new Smartphone('Rogério', 'Iphone');
console.log(d1);