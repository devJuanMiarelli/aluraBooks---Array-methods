function calcularValorTotal(livros) { 
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); // acc -> acumulador , livro.value -> valor de cada livro & 0 -> valor do primeiro índice.
}