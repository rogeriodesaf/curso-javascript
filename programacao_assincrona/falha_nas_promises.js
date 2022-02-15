let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada.then((value) => {console.log(value)})
.catch((e)=>{console.log('Erro:'+e)})