let idade = 18;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log('Você não pode dirigir pois não possui cnh apesar de ser maior de 18')
}else if ( idade >= 18 && cnh == true){
    console.log('Você pode dirigir porque é maior de 18 e possui cnh');
}else{
    console.log('Menor de idade')
}