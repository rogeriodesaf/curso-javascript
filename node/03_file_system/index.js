let {readFile, writeFile} = require('fs');
const { text } = require('stream/consumers');

readFile("arquivo.txt", "utf-8", (error, text)=>{
    if(error){
        throw error;
    }else{
        console.log(text);
    }
})

writeFile("arquivo.txt", "Texto adicionado com writeFile", (erro)=>{
    if(erro){
        throw erro;
    }else{
        console.log('escreveu com sucesso')
    }
})

console.log(text)