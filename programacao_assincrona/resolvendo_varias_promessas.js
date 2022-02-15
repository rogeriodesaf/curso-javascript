const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promessa resolvida após 2 segundos");
    }, 5000)
});

const p2 = new Promise((resolve, reject)=>{
    
        resolve("Promessa resolvida após 3 segundos")
   
})

const p3 = Promise.resolve(5)

Promise.all([p1,p2,p3])
.then((values)=>{console.log(values)})