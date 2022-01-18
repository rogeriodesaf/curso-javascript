const arr1 = [0,1,2,3,4,5];
const arr2 = [0,1,2];

function verificaNumeroDeElementos (a){
    if(a.length < 5){
        console.log('Poucos elementos')
    }else
    console.log('Muitos elementos');
}

verificaNumeroDeElementos(arr1);
verificaNumeroDeElementos(arr2);