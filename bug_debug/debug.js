// debugando o código com console.log


let a = 1;
let b = 2;
let c = 3;

if(c>a){
    a = b;
   
}

for(let i = 5; i > 0; i--){
    
    b++;
    a = a + c + 1;
    // 6 , 10 , 14, 18,22
    console.log(a);

    
}



if(b == a){
    a++;

}else{
    a = a + b + c; // 22 + 7 + 3 = 32
}
console.log(a);

a = a * b;  // 32 * 7 = 224
console.log(a);