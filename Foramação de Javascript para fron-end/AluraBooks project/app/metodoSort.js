const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreĆ§o)

function ordenarLivrosPorPreĆ§o(){
    let livrosOrdenados = livros.sort((a, b)=> a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}