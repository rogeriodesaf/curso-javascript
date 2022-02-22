const temperaturas = [1,3,5,78,5,0]

let maior = temperaturas[0];
let menor= temperaturas[0];
for(let i = 0 ; i < temperaturas.length ; i++){
    if(temperaturas[i] > maior){
        maior = temperaturas[i];
    }else{
        menor = temperaturas[i];
    }
}

console.log(maior);
console.log(menor);