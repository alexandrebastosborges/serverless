/**
 * Handlers
 */
const {
  adicionaisHandler,
  filiaisClientesHandler,
  situacoesAtualizacaoCadastroHandler,
  cpfClientesHandler,
  clientesRendasObHandler,
  _4_Handler

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
  _4_Controller,

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

  _4_Handler: (event, context) =>
  _4_Handler(event, context, _4_Controller),
};
