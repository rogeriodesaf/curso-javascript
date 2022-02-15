function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject('BAD VALUE')
        setTimeout(function () {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Frase 1', 1000)
    .then((value) => {
        console.log(value)
        return esperaAi('Frase 2', 2000)
    })
    .then((value) => {
        console.log(value)
        return esperaAi(1, 2000)
    })
.then((value)=>{console.log(value)
    return esperaAi('Frase 4', 1000)
})
.then((value)=>{console.log(value)})
.catch(e=>{console.log(e)})