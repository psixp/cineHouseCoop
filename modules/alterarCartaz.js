const database = require('../database/catalogo.json')

function alterarStatusEmCartaz(codigo, buscarFilme) {
  console.log('Esse filme não está em cartaz! ')
  for (let i = 0; i < database.length; i++) {
    if (database[i].codigo === codigo) {
      database[i].emCartaz === true
        ? (database[i].emCartaz = false)
        : (database[i].emCartaz = true)
      buscarFilme(codigo)
    }
  }
}

modules.export = alterarStatusEmCartaz
