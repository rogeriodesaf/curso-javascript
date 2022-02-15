function somaComDelay(a,b){
    return new Promise((resolve)=>{
         setTimeout(()=>{
            resolve(a + b)
         }, 5000)
    });
}

async function soma(a,b,c){
    let x = somaComDelay(a,b)
    let z = c

    return await x + z 
}

soma(1,2,3)
.then((value)=>{console.log(value)})
   