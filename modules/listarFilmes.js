const listarFilmes = (database) => {
    return database.map(filme => filme.titulo)
}

module.exports = listarFilmes;