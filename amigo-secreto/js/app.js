let listaAmigo = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');  
    
    if(listaAmigo.includes(nomeAmigo.value)) {
        alert('Esse nome ja está incluido');
        nomeAmigo.value = '';
    } else {
        
        listaAmigo.push(nomeAmigo.value);
        
        if (lista.textContent == '') {
            lista.textContent = nomeAmigo.value;
        } else {
            lista.textContent = lista.textContent + ', ' + nomeAmigo.value; 
        }

    nomeAmigo.value = '';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    embaralha(listaAmigo);
    let listaSorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < listaAmigo.length; i++) {
        if (i == listaAmigo.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigo[i] + ' --> ' + listaAmigo[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigo[i] + ' --> ' + listaAmigo[i + 1] + '<br>';
        } 
    }
}

function reiniciar() { 
    listaAmigo = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}