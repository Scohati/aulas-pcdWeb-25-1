// listas
export const combustiveis = [
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
export const carro = {
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
export function retornaInformacoesCarro() {
    const tipoCombustivel = carro.tipoCombustivel

    const combustiveisDoCarro = tipoCombustivel.map(idCombustivel => {
        const buscaNomeCombustivel = combustiveis.find(combustivel => combustivel.id === idCombustivel)
        return buscaNomeCombustivel.nome
    })

    console.log(`Modelo do carro: ${carro.modelo}, marca do carro: ${carro.marca}, combustiveis: ${combustiveisDoCarro}`)
}
