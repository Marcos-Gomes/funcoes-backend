const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let valorTotalProdutos = 0;
        let totalItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            valorTotalProdutos += (this.produtos[i].qtd * this.produtos[i].precoUnit) / 100;
            totalItens += this.produtos[i].qtd;
        }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${valorTotalProdutos.toFixed(2)}`);
    },
    addProduto: function () {
        let valorTotalProdutos = 0;
        let totalItens = 0;
        carrinho.produtos.push(novaBermuda, novoTenis);
        for (let i = 0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].id === carrinho.produtos[i].id) {
                valorTotalProdutos += (carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit) / 100;
                totalItens += carrinho.produtos[i].qtd;
            }
        }
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${valorTotalProdutos.toFixed(2)}`);
    },
    imprimirDetalhes: function () {
        let valorTotalProdutos = 0;
        let totalItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd * this.produtos[i].precoUnit / 100).toFixed(2)}`);
            valorTotalProdutos += (carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit) / 100;
            totalItens += carrinho.produtos[i].qtd;
        }
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${valorTotalProdutos.toFixed(2)}`);

    }
}

carrinho.imprimirDetalhes();


function imprimirResumoDoCarrinho(carrinho) {
    let valorTotalProdutos = 0;
    let totalItens = 0;
    for (let i = 0; i < carrinho.produtos.length; i++) {
        valorTotalProdutos += (carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit) / 100;
        totalItens += carrinho.produtos[i].qtd;
    }
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${valorTotalProdutos.toFixed(2)}`);
}

imprimirResumoDoCarrinho(carrinho);



function addProdutoAoCarrinho(carrinho, produto) {
    let valorTotalProdutos = 0;
    let totalItens = 0;
    carrinho.produtos.push(novaBermuda, novoTenis);
    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id === carrinho.produtos[i].id) {
            valorTotalProdutos += (carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit) / 100;
            totalItens += carrinho.produtos[i].qtd;
        }
    }
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${valorTotalProdutos.toFixed(2)}`);
}
addProdutoAoCarrinho(carrinho);