function retornaNumeroPositivo(num){
    if((num)>=0){
        return 'Este número já é positivo.'
    } else {
    return Math.abs(num);
    }
}

console.log(retornaNumeroPositivo(-1));
console.log(retornaNumeroPositivo(-158));
console.log(retornaNumeroPositivo(2));