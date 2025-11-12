function alterarStatus(id) {
    let botaoGame = document.getElementById(`game-${id}`);
    let imagem = botaoGame.querySelector('.dashboard__item__img');
    let botao = botaoGame.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
    }

}