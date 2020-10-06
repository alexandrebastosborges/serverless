const { getValueParam } = require("../commons");
/**
 * Controllers
 */
const adicionaisController  = require("./adicionaisController");
const filiaisClientesController  = require("./filiaisClientesController");
const situacoesAtualizacaoCadastroController  = require("./situacoesAtualizacaoCadastroController");
const cpfClientesController  = require("./cpfClientesController");
const clientesRendasObController  = require("./clientesRendasObController");
const clientesRendasAcController  = require("./clientesRendasAcController");
const limitesController  = require("./limitesController");
/**
 * Mappers
 */
const {
  adicionaisMapper,
  filiaisClientesMapper,
  situacoesAtualizacaoCadastroMapper,
  cpfClientesMapper,
  clientesRendasObMapper,
  clientesRendasAcMapper,
  limitesMapper
} = require("../mappers");
/**
 * Services
 */
const {
  adicionaisService,
  filiaisClientesService,
  situacoesAtualizacaoCadastroService,
  cpfClientesService,
  clientesRendasObService,
  clientesRendasAcService,
  limitesService
} = require("../services");

module.exports = {
  adicionaisController: (request) =>
    adicionaisController(
      request,
      adicionaisService,
      getValueParam,
      adicionaisMapper
    ),
  filiaisClientesController: (request) =>
    filiaisClientesController(
      request,
      filiaisClientesService,
      getValueParam,
      filiaisClientesMapper
    ),
    situacoesAtualizacaoCadastroController: (request) =>
    situacoesAtualizacaoCadastroController(
      request,
      situacoesAtualizacaoCadastroService,
      getValueParam,
      situacoesAtualizacaoCadastroMapper
    ),

    cpfClientesController: (request) =>
    cpfClientesController(
      request,
      cpfClientesService,
      getValueParam,
      cpfClientesMapper
    ),

    clientesRendasObController: (request) =>
    clientesRendasObController(
      request,
      clientesRendasObService,
      getValueParam,
      clientesRendasObMapper
    ),

    clientesRendasAcController: (request) =>
    clientesRendasAcController(
      request,
      clientesRendasAcService,
      getValueParam,
      clientesRendasAcMapper
    ),

    limitesController: (request) =>
    limitesController(
      request,
      limitesService,
      getValueParam,
      limitesMapper
    ),
};
