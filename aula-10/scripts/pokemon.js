const url = 'https://pokeapi.co/api/v2/'
const slug = 'pokemon?limit=10&offset=0'

async function buscaListaPokemons() {
    const respostaRequisicao = await fetch(`${url}${slug}`)
    const respostaParaJson = await respostaRequisicao.json()
    console.log(respostaParaJson)

    respostaParaJson?.results.forEach(async item => await buscaDetalhesPokemon(item.url))
}
  
async function buscaDetalhesPokemon(path) {
    const respostaRequisicao = await fetch(path)
    const respostaParaJson = await respostaRequisicao.json()
    const { name, weight } = respostaParaJson
    exibePokemonNoHtml(name, weight)
    console.log(respostaParaJson)
}

function exibePokemonNoHtml(nomePokemon, pesoPokemon) {
    const mainContainer = document.getElementById('mainContainer')
    const section = document.createElement('section')
    const conteudo = `
        <div>
            <h1>${nomePokemon}</h1>
            <h5>${pesoPokemon}</h5>
        </div>
        <br>
    `
    section.innerHTML = conteudo
    mainContainer.appendChild(section)
}

export { buscaListaPokemons }
