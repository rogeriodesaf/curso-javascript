class Carro{
    constructor(marca, cor, gasolinaRestante, consumoPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumoPorLitro = consumoPorLitro;

    }
    dirigir(kmPercorridos){
        
        let litrosRestantes = kmPercorridos/this.consumoPorLitro
        return this.gasolinaRestante -= litrosRestantes;
    }
    set abastecer(novaQtd){
        this.gasolinaRestante += novaQtd;
    }
}

let carro = new Carro('gol', 'prata', 50,10);
carro.dirigir(30);
console.log(carro);
//carro.abastecer = 20;
