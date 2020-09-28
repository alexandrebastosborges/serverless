const axios = require("axios");

/**
 * Services
 */
const { adicionaisServices } = require("./adicionaisService");
const { filiaisClientesServices } = require("./filiaisClientesService");
const { situacoesAtualizacaoCadastroServices } = require("./situacoesAtualizacaoCadastroService");
const { cpfClientesServices } = require("./cpfClientesService");
const { clientesRendasObServices } = require("./clientesRendasObService");
const { _4_Services } = require("./clientesRendasAcService");

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

  _4_Service: {
    _4_Services: (url, body) =>
    _4_Services(url, body, axios),
  }
};
