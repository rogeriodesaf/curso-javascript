function calculaPotencia(base,expoente){
    return base ** expoente; 
}

console.log(calculaPotencia(5,7));

/* outra maneira */

const potencia = (base,expoente)=> Math.pow(base,expoente);
console.log(potencia(5,7));