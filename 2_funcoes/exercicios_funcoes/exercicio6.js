function detectaTipoDeDado(data) {

    if (typeof (data) == 'boolean') {
        return 'Este dado é um boleano'
    } else if (typeof (data) == 'number') {
        return 'Este dado é do tipo number'
    } else {
        return 'Este dado é do tipo string'
    }

}
console.log(detectaTipoDeDado(true));
console.log(detectaTipoDeDado(52));
console.log(detectaTipoDeDado('Texto'));

/* Outra maneira */

function detectaTipoDeDado2(data){
    if(typeof data === 'string'){
        console.log('Este dado é do tipo String.')
    }else if(typeof data === 'boolean'){
        console.log('Esse dado é do tipo boolean.')
    }else if(typeof data === 'number'){
        console.log('Este dado é do tipo number')
    }
}

detectaTipoDeDado2(false);
detectaTipoDeDado2('Carro');
detectaTipoDeDado2(100);