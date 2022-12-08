function pesquisar(){
    const resultadoDePesquisa = document.getElementById('pesquisa').value.toUpperCase();

    console.log(resultadoDePesquisa);


    if (resultadoDePesquisa == "JOGOS") {
        window.location.href = "file:///home/aluno/Imagens/copadomundo/html/jogos.html";
    }else if (resultadoDePesquisa == "CLASSIFICAÇÃO") {
        window.location.href = "file:///home/aluno/Imagens/copadomundo/html/classificacao.html";
    }
}