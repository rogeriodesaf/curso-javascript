const p = Promise.resolve(5);

console.log('outros códigos');

p.then((value)=>{return value +10})
.then((value)=>{console.log(value)});

