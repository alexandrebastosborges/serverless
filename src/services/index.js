const axios = require("axios");

/**
 * Services
 */
const { adicionaisServices } = require("./adicionaisService");
const { filiaisClientesServices } = require("./filiaisClientesService");
const { situacoesAtualizacaoCadastroServices } = require("./situacoesAtualizacaoCadastroService");
const { cpfClientesServices } = require("./cpfClientesService");
const { clientesRendasObServices } = require("./clientesRendasObService");
const { clientesRendasAcServices } = require("./clientesRendasAcService");
const { limitesServices } = require("./limitesService");

module.exports = {
  adicionaisService: {
    adicionaisServices: (url, body) =>
      adicionaisServices(url, body, axios),
  },
  filiaisClientesService: {
    filiaisClientesServices: (url, body) =>
      filiaisClientesServices(url, body, axios),
  },
  situacoesAtualizacaoCadastroService: {
    situacoesAtualizacaoCadastroServices: (url, body) =>
    situacoesAtualizacaoCadastroServices(url, body, axios),
  },

  cpfClientesService: {
    cpfClientesServices: (url, body) =>
    cpfClientesServices(url, body, axios),
  },

  clientesRendasObService: {
    clientesRendasObServices: (url, body) =>
    clientesRendasObServices(url, body, axios),
  },

  clientesRendasAcService: {
    clientesRendasAcServices: (url, body) =>
    clientesRendasAcServices(url, body, axios),
  },

  limitesService: {
    limitesServices: (url, body) =>
    limitesServices(url, body, axios),
  }
};
