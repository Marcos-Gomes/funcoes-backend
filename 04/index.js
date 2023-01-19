const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        if (valor > 0) {
            console.log(`Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`);
            this.saldo += valor;
            contaBancaria.historicos.push({ "deposito de R$": valor / 100 });
        }


    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            console.log(`Saque de R$ ${valor / 100} realizado para o cliente: Maria`);
            this.saldo -= valor;
            contaBancaria.historicos.push({ "saque de R$": valor / 100 });
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
        console.log(this.historicos);
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();