const incluirFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz, catalogo)=>{
    catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz});
}

module.exports = incluirFilme;