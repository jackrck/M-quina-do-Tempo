function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById  ("resultados-pesquisa");

 let campoPesquisa = document.getElementById 
 ("campo-pesquisa").value
 //se campoPesquisa for uma string sem nada 
 if(campoPesquisa== ""){
  section.innerHTML = "<p>Nenhuma música ou artista foi encontrado</p>"
  return
 }
  console.log(campoPesquisa);
 campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descrição = "";
  let tags = "";

  // Itera sobre cada dado da lista de resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()
    tags = dado.tags.toLowerCase()
    //se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa)|| descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada resultado, incluindo:
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descrição}</p>
        <img src="${dado.imagem}" alt="imagem do ${dado.titulo}">
        <a href="https://www.youtube.com/youtube.com/watch?v=zRIbf6JqkNc" target="_blank">Ouça agora</a>
      </div>
    `;
  }
    }
    if(!resultados){
      resultados = "<p>Nada foi encontrado</p>";
    }
   
      // Atualiza o conteúdo HTML da seção com os resultados construídos
  section.innerHTML = resultados;
}