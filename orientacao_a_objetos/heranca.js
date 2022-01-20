class Mamifero {
    constructor(patas) {
        this.patas = patas
    };
}

class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas,patas)
        this.raca = raca;
    }
};

const c1 = new Cachorro(4,'Pastor Alemão');
console.log(c1);