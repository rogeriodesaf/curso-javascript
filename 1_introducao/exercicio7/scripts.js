
//encontrando números primos 

let num = 6;
let cont = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0 ) {
        cont++
    }
}

if (cont > 2){
    console.log(`${num} não é primo.`)
}else{
    console.log(`${num} é primo.`)
}