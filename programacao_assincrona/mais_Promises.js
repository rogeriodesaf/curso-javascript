function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
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
        return esperaAi('Frase 3', 2000)
    })
.then((value)=>{console.log(value)
    return esperaAi('Frase 4', 1000)
})
.then((value)=>{console.log(value)})