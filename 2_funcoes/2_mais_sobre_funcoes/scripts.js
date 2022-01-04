function multiplicaTresValores (x,s,d){
   return x * s * d
}

console.log(multiplicaTresValores(1,2,3));

/**** */

const multplica2 = multiplicaTresValores(2,3,4);
console.log(multplica2);

/**** */

function dirige (usuario, cnh){
    if(usuario >= 18 && cnh == true){
        console.log('pode dirigir')
    }else {
        console.log('não pode dirigir')
    }
}

dirige(18,true);