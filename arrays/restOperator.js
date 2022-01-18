let num = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i ++){
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1);
imprimirNumeros(2,36,7,8);