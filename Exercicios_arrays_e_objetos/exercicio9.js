/*Criar uma array a partir de uma frase;
Imprimir cada palavra do array no console por meio de um for;
*/

const frase = 'Eu preciso aprender';

const novaFrase = frase.split(" ");

for(i = 0 ; i < novaFrase.length; i++){
    console.log(novaFrase[i]);
}