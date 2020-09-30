/**
 * Handlers
 */
const {
  adicionaisHandler,
  filiaisClientesHandler,
  situacoesAtualizacaoCadastroHandler,
  cpfClientesHandler,
  clientesRendasObHandler,
  clientesRendasAcHandler

} = require("./handler");

/**
 * Controllers
 */
const {
  adicionaisController,
  filiaisClientesController,
  situacoesAtualizacaoCadastroController,
  cpfClientesController,
  clientesRendasObController,
  clientesRendasAcController,

 }= require("./controllers");

module.exports = {
  adicionaisHandler: (event, context) =>
    adicionaisHandler(event, context, adicionaisController),

  filiaisClientesHandler: (event, context) =>
    filiaisClientesHandler(event, context, filiaisClientesController),

  situacoesAtualizacaoCadastroHandler: (event, context) =>
  situacoesAtualizacaoCadastroHandler(event, context, situacoesAtualizacaoCadastroController),

  cpfClientesHandler: (event, context) =>
  cpfClientesHandler(event, context, cpfClientesController),

  clientesRendasObHandler: (event, context) =>
  clientesRendasObHandler(event, context, clientesRendasObController),

  clientesRendasAcHandler: (event, context) =>
  clientesRendasAcHandler(event, context, clientesRendasAcController),
};
