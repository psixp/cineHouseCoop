function alterarStatusEmCartaz(codigo, buscarFilme, dados) {
  console.log('Esse filme não está em cartaz! ')
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].codigo === codigo) {
      dados[i].emCartaz === true
        ? (dados[i].emCartaz = false)
        : (dados[i].emCartaz = true)
      buscarFilme(codigo , dados)
    }
  }
}

module.exports = alterarStatusEmCartaz
