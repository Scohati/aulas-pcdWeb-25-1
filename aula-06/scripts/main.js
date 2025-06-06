var temPaoFrances = true;
var temPaoDeForma = true;
var EPaoAmanhecido = false;
var temosDinheiro = true;

const usuario = {
    nome: 'Fulano de tal',
    temCabelo: false,
    idade: 20,
    nacionalidade: 'brasileiro',
    profissao: 'desenvolvedor',
    dadosProfissao: {
        tempoDeCarreiraEmAnos: 10,
        senioridade: 'junior',
        empresasQueJaTrabalhou: ['Nubank', 'Facebook', 'Google', 'Amazon'],
        empresasQueJaTrabalhouInformacoes: [
            {
                nome: 'Nubank',
                duracao: 3,
                cargo: 'estagiario'
            },
            {
                nome: 'Facebook',
                duracao: 2,
                cargo: 'trainee'
            },
            {
                nome: 'Google',
                duracao: 4,
                cargo: 'junior'
            },
            {
                nome: 'Amazon',
                duracao: 1,
                cargo: 'junior'
            },
        ]
    }
}

// console.log(usuario.dadosProfissao.empresasQueJaTrabalhou[0])
usuario.dadosProfissao.empresasQueJaTrabalhou.forEach((empresa, index) => {
    if ([1, 3].includes(index)) {
        console.log(empresa, index)
    }
})

const infoEmpresas = usuario.dadosProfissao.empresasQueJaTrabalhouInformacoes.map((empresa, index) => {
    return {
        ...empresa,
        id: index
    }
})

const arr = []

// ir a padaria
if ((temPaoFrances || temPaoDeForma) && !EPaoAmanhecido && temosDinheiro) {
    comprarPao('salgado');
} else if (temosDinheiro) {
    comprarPao('doce')
}

function comprarPao(tipoPao) {
    if (tipoPao === 'salgado') {
        return console.log("Compra pão salgado");
    } else {
        return console.log("Compra pão doce");
    }
}