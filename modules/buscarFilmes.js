const buscarFilme = (cod, dados) => {
    /* const dados = require('../database/catalogo.json') */
    const filme = dados.find(element => element.codigo === cod)
    if (filme) {
        console.log(`-------------------\n
            Codigo: ${filme.codigo}\n
            Titulo: ${filme.titulo}\n
            Duração: ${filme.duracao} hora(s)\n
            Atores: ${filme.atores.join(", ")}\n
            Ano de lançamento: ${filme.anoDeLancamento}\n
            Em cartaz: ${filme.emCartaz === true ? "Sim" : "Não"}\n`)
    } else {
        console.log("Nem um Código encontrado!")
    }
}

module.exports = buscarFilme