function pesquisar(){
    const resultadoDePesquisa = document.getElementById('pesquisa').value.toUpperCase();

    console.log(resultadoDePesquisa);


    if (resultadoDePesquisa == "JOGOS") {
        window.location.href = "file:///C:/Users/User/OneDrive/Imagens/copadomundo/html/jogos.html";
    }
    else if (resultadoDePesquisa == "CLASSIFICAÇÃO") {
        window.location.href = "file:///C:/Users/User/OneDrive/Imagens/copadomundo/html/classificacao.html";
    }
    else if (resultadoDePesquisa == "GOLS"){
        window.location.href = "file:///C:/Users/User/OneDrive/Imagens/copadomundo/html/gols.html";
    }
    else if (resultadoDePesquisa == "NOTÍCIAS"){
        window.location.href = "file:///C:/Users/User/OneDrive/Imagens/copadomundo/html/ultima.html";
    }
}