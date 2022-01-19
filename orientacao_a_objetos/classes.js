/*let cachorro = {
    patas : 4,
    raca : 'SRD',
    latir : function(){
        console.log('Au au')
    }
}

const labrador = Object.create(cachorro);
labrador.latir(); */

function Cachorro(patas, raca) {
    this.patas = patas;
    this.raca = raca
    
    }

Cachorro.prototype.latir = function(){
    console.log('AAU');
}

const cachorro1 = new Cachorro(4,'Labrador');
cachorro1.latir();