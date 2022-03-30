const database = require('./database/catalogo.json');
const alterarStatusEmCartaz = require('./modules/alterarCartaz');
const buscarFilmes = require('./modules/buscarFilmes');
const incluirFilme = require('./modules/incluirCartaz');
const listarFilmes = require('./modules/listarFilmes');




//-------------- ZONA DE TESTE --------------//

/* buscarFilmes(2, database) */

/* alterarStatusEmCartaz(1, buscarFilmes, database) */

/* incluirFilme(1234, "Lagoa Azul", 2, ["John Travolta", "Eros Ramazotti"], 2021, true, database);*/

//console.log(listarFilmes(database));