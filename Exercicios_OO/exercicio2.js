class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens,
            this.qtd = qtd,
            this.valorTotal = valorTotal
    }

    addItem(item) {
        let contador = 0
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1 
            }
           
           
        }
        if(contador == 0){
        this.itens.push(item);
    };
        this.qtd += item.qtd;
        this.valorTotal += item.qtd * item.preco;

    }
    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj){
                    return obj.id == item.id

                })
                this.qtd = this.qtd - this.itens[itemCarrinho].qtd
                this.valorTotal = this.valorTotal - this.itens[itemCarrinho].preco
                 * this.itens[itemCarrinho].qtd;
                this.itens.splice(index,1);
              
        /*O método splice() pode ser o melhor método que podemos usar para remover o objeto de um array. 
        Ele muda o conteúdo de um array removendo ou substituindo elementos existentes ou adicionando novos 
        elementos no local.
        A sintaxe para o método splice() é mostrada abaixo.

Array.splice(index, count, items1, ... , itemX)
A opção index refere-se a um inteiro que especifica em que posição adicionar / remover itens. 
Também podemos usar valores negativos para especificar a posição do final do array.
 A opção count é opcional e indica o número de itens a serem removidos. 
*/

            }
        }
    }
}

const carrinho1 = new Carrinho([{
    id: 01,
    nome: 'camisa',
    qtd: 2,
    preco: 10,

}, {
    id: 02,
    nome: 'Calça',
    qtd: 2,
    preco: 20,
},
], 4, 60);

console.log(carrinho1);
carrinho1.addItem({
    id: 03,
    nome: 'sapato',
    qtd: 2,
    preco: 20,
})
console.log(carrinho1);
carrinho1.removeItem({
    id: 03,
    nome: 'sapato',
    qtd: 2,
    preco: 20,
})
console.log(carrinho1);