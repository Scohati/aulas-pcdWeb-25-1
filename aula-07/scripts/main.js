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


// funcoes
function retornaInformacoesCarro() { 
    const tipoCombustivel = carro.tipoCombustivel
    const coletaNomesCombustiveis = tipoCombustivel.forEach(tipoCombustivelDoCarro => {
        const cruzaInformacoes = combustiveis.filter(combustivel => {
            return 3
        })
        console.log(cruzaInformacoes);
    })
    console.log(coletaNomesCombustiveis)
}


retornaInformacoesCarro()