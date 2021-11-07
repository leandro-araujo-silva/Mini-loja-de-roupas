const items = [
  {
    id: 0,
    nome: 'Camiseta',
    img: 'https://cdn.iset.io/assets/51664/produtos/1500/camiseta-branca-e-preta-masc-sem-bolso-frente.jpg',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'Short',
    img: 'https://images.tcdn.com.br/img/img_prod/671591/calcao_c_bolso_tripoli_03752_4865_1_20190306083106.jpg',
    quantidade: 0
  },
  {
    id: 2,
    nome: 'Sapato',
    img: 'https://a-static.mlcdn.com.br/618x463/sapato-social-masculino-casamento-schiareli-836-preto/schiarelicalcados/11407027143/bd1ae578756e849d21bab2bf668e18b2.jpg',
    quantidade: 0
  }
]

inicializarLoja = () => {
  let containerProdutos = document.getElementById('produtos')
  items.map(val => {
    containerProdutos.innerHTML += `
    
    <div class="produto-single">
      <img src="${val.img}"/>
      <p>${val.nome}</p>
      <a key="${val.id}" href="#">Adicionar ao carrinho</a>
    </div>
    `
  })
}

inicializarLoja()

atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById('carrinho')
  containerCarrinho.innerHTML = ''
  items.map(val => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML += `
      
      <div class="info-single">
      <p>Produto: ${val.nome}</p> 
      <p>Quantidade: ${val.quantidade}</p>
      </div>
      `
    }
  })
}

var links = document.getElementsByTagName('a')

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    items[key].quantidade++
    atualizarCarrinho()
    return false
  })
}
