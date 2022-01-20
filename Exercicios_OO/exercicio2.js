class CarrinhoDeCompras {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    additem(item) {
        let contador = 0
        for (let itemCarrinho in this.itens) {
            
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.quantidade
                contador = 1
            }
            
            
            
        }
        if(contador == 0){
            this.itens.push(item)
        }
        

        
        this.qtd += item.quantidade;
        this.valorTotal += item.quantidade * item.valor;
    }



}



const carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        nome: "camisa",
        quantidade: 10,
        valor: 20,
    },
    {
        id: 02,
        nome: "calça",
        quantidade: 10,
        valor: 20,
    }], 20, 400);


console.log(carrinho)
carrinho.additem({ id: 03, nome: "boné", quantidade: 1, valor: 15 })
console.log(carrinho)

