

var produtos = [
    {
        id: 0,
        imagem: 'https://i.pinimg.com/564x/30/8a/20/308a20fca605c2ae0d506d502416bc63.jpg',
        nome: 'Batom rosa',
        texto: 'é um batom rosa',
        quantidade: 0,
    },
    {
        id: 1,
        imagem: 'https://i.pinimg.com/564x/77/5f/b1/775fb1ea57d34898a15829e976f325ac.jpg',
        nome: 'Peruca rosa',
        texto: 'é uma peruca rosa',
        quantidade: 0,
    },
    {
        id: 2,
        imagem: 'https://i.pinimg.com/564x/04/0b/a5/040ba5bc58207f57de9c708cb8fe93fc.jpg',
        nome: 'Peruca Loira',
        texto: 'é um peruca loira',
        quantidade: 0,
    }
]

inicializarLoja = () => {
    produtos.map((produto) => {
        document.getElementById('produtos').innerHTML += `
        <div class= "produto">
            <img src="${produto.imagem}">
            <div>
            <h2>${produto.nome}</h2>
            <hr>
            <p>${produto.texto}</p>
            <hr>
            <a key="${produto.nome}" href="#">Adicionar ao carrinho!</a>
            </div>
        </div>
    `
    })
}

inicializarLoja();
atualizarCarrinho = () => {
    console.log(produtos)
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        produtos[key].quantidade++;
        return false;
    })
}