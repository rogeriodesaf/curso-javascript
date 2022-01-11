function verificaTamanhoString(mens) {
    if (mens.length > 10) {
        console.log('Texto muito longo.')
    } else {
        console.log('Texto dentro do limite.')
    }
}

verificaTamanhoString('O rato roeu a roupa do rei de roma');
verificaTamanhoString('gato')