function* geradorId(){
    let id = 0;
    while(true){
        yield id ++;
    }
}

let gerador = geradorId();
console.log(gerador.next().value);
console.log(gerador.next().value);