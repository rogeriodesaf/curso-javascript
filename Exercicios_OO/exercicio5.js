class ContaBancaria{
    constructor(saldoCc, saldocP, jurosPoupanca){
        this.saldoCc = saldoCc;
        this.saldocP = saldocP;
        this.jurosPoupanca = jurosPoupanca;
    }
    deposito(dinheiroCreditado){
        this.saldoCc += dinheiroCreditado;
        
    }
   saque(dinheiroDebitado){
        this.saldoCc -= dinheiroDebitado;
   }
   transferencia(dinheiroTransferido){
        this.saldoCc -= dinheiroTransferido;
        this.saldocP += dinheiroTransferido;
   }
   juros(){
     let juros = (this.saldocP * this.jurosPoupanca)/100;
      this.saldocP += juros
   }
};

let conta = new ContaBancaria(1000, 5000, 1);


 class ContaEspecial extends ContaBancaria{
     constructor(saldoCc, saldocP,jurosPoupanca){
        super(saldoCc,saldocP,jurosPoupanca*2);
       
     }
     
 }

 let contaEspecial = new ContaEspecial(10000,50000,1);
 conta.saque(500);
// conta.deposito(5000)
 //conta.transferencia(3000);
 
 console.log(conta);
 conta.deposito(5000);
 console.log(conta);
 conta.transferencia(3000);
 console.log(conta);
 conta.juros();
 console.log(conta);
 console.log(contaEspecial);
 contaEspecial.juros();
 console.log(contaEspecial);
