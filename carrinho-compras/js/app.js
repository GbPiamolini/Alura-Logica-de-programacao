    let valorTotal = 0;

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('$')[1];
    let subtotal = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal}</span>
        </section>`;
    valorTotal = valorTotal + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`
    limparCampo();
}

function limparCampo() {
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
}

function limpar() {
    valorTotal = 0;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = 'R$ 0';
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> </span> <span class="texto-azul"> </span>
        </section>`;
    limparCampo();
}


