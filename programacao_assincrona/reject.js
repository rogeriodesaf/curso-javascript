function verificarNumero(num){
    return new Promise((resolve, reject)=>{
        if(num == 2){
            resolve(`O número é ${num}`);
        }else{
            reject(new Error('Erro'))
        }
    });
}


verificarNumero(2)
.then((value)=>{console.log(value)})
.catch((reason)=>{console.log(reason)})
verificarNumero(3)
.then((value)=>{console.log(value)})
.catch((reason)=>{console.log(reason)})