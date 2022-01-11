function imprimeHelloWord (mens){
    console.log(mens)
}

imprimeHelloWord('Hello Word !');
 /* Outra maneira */

 function imprimeHelloWord2 (){
     console.log("Hello Word !");
 }

 imprimeHelloWord2();

 /* Outra maneira */

 const imprimeHelloWord3 = function(){
     return 'Hello World !'
 }

 console.log(imprimeHelloWord3());

  /* Outra maneira */

  const imprime = ()=> console.log('Hello World!');
  imprime();