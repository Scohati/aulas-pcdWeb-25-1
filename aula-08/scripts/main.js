import arrow from "./teste"

// listas
const combustiveis = [
    {
        id: 407,
        nome: 'Gasolina'
    },
    {
        id: 2023,
        nome: 'Etanol'
    },
    {
        id: 974,
        nome: 'Elétrico'
    }
]

// objetos
const carro = {
    marca: 'Toyota',
    modelo: 'Etios',
    ano: '2022',
    cor: 'azul',
    adicionais: [],
    tipoCombustivel: [407, 2023],
    qtdDonos: 1,
    kmRodado: 103000
}


// funcoes
function retornaInformacoesCarro() {
    const tipoCombustivel = carro.tipoCombustivel

    const combustiveisDoCarro = tipoCombustivel.map(idCombustivel => {
        const buscaNomeCombustivel = combustiveis.find(combustivel => combustivel.id === idCombustivel)
        return buscaNomeCombustivel.nome
    })

    console.log(`Modelo do carro: ${carro.modelo}, marca do carro: ${carro.marca}, combustiveis: ${combustiveisDoCarro}`)
}


retornaInformacoesCarro()

// desconsiderar esta linha =======================================
// Funções assíncronas

const url = 'https://pokeapi.co/api/v2/'
const slug = 'pokemon?limit=100000&offset=0'

async function funcaoAssincrona() {
    const testandoRequisicao = await fetch(`${url}${slug}`)
    const requisicaoParaJson = await testandoRequisicao.json()
    console.log(requisicaoParaJson)
}


funcaoAssincrona()
arrow()

console.log(carroJson)
// {
//     "name": "bulbasaur",
//     "url": "https://pokeapi.co/api/v2/pokemon/1/"
// }