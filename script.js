const container = document.querySelectorAll('.container'); /*query selector all pois existem mais de um elemento com a classe ".container"*/ 


/*função que irá ser executada toda vez que o container por clicado*/
container.forEach(element => element.addEventListener('click', () => exibirConteudo(element)))

const exibirConteudo = (e) =>{
     /*selecionando os paragráfos*/
    const conteudo = e.childNodes[3]
    /*chil nodes retorna uma lista dos nós filhos*/
    /*cada filho possui uma posição, nesse caso está na posição 3*/
    conteudo.classList.toggle('block') /*responsável por adicionar e remover a classe bloco*/
}