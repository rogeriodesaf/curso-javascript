class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valorDepositado){
         this.saldo = valorDepositado + this.saldo;
         
    }
    saque(valorSacado){
        this.saldo =  this.saldo - valorSacado
         
    }
}

const cont = new Conta(5);
cont.deposito(10);
console.log(cont.saldo);
cont.saque(5);
console.log(cont.saldo);