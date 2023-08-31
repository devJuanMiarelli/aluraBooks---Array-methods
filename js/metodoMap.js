function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // ... -> chama-se "spread operator" esses 3 pontos, e ele faz uma cópia do objeto ou array, e faz os comandos dados.
    });

    return livrosDesconto;
}