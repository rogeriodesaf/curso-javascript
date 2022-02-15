async function soma(a,b){
    return a + b;
}

console.log(soma(1,1));
soma(2,3)
.then((value)=>{console.log(value)});