class Cachorro  {
    constructor(raca){
        this.raca = raca;
    }

}

Cachorro.prototype.latir = function(){
    console.log(`O ${this.raca} faz Auuuuuuu...`);
}

const cachorro1 = new Cachorro('Pastor Alemão');
console.log(cachorro1.raca);
cachorro1.latir();