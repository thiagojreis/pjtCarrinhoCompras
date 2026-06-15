// 1. Variável global transformada em constante
const impostoGlobal = 0.10;

const meuCarrinho = {
    produtos: [],

    // 2. Method Shorthand (sem a palavra 'function')
    adicionarProduto(nome, preco) {
        
        // 3. Property Shorthand
        const novoProduto = { nome, preco }; 
        this.produtos.push(novoProduto);
    },

    // 2. Method Shorthand
    gerarRecibo() {
        // 4. .reduce() com Arrow Function substituindo o for
        // 'acc' é o acumulador (total) e começa em 0 (o segundo parâmetro do reduce)
        const total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
        
        const totalComImposto = total + (total * impostoGlobal);
        
        // 5. Template String para um retorno mais legível
        return `Total da compra: R$ ${totalComImposto}`;
    }
};

// --- Testando o código ---
meuCarrinho.adicionarProduto('Teclado Mecânico', 300);
meuCarrinho.adicionarProduto('Mouse Gamer', 150);

console.log(meuCarrinho.gerarRecibo()); 
// Saída esperada: Total da compra: R$ 495