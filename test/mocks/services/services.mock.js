const axios = {
    get: () => {
      return {
          response: "GET"
      };
    },
    post: () => {
        return {
            response: "POST"
        };
      },
    patch: () => {
      return {
          response: "PATCH"
      };
    },
    put: () => {
      return {
          response: "PUT"
      };
    },

    delete: () => {
    return {
        response: "DELETE"
    };
    },

  };

  const body = {};

  const request = {
    pathParameters:{
      "codigoEmpresa" : "dato-1",
      "codigoFilial" : "dato-2",
      "codigoCliente" : "dato-3",
      "codigoProduto": "dato-4",
      "codProduto": "dato-5",
      "codigoCanal": "dato-6",
      "tipoAdesoe": "dato-7",
      "codigoAdesao": "dato-8",
      "codigoTermo": "dato-9"

    },
    body:{
      "body":"codigo"
    },
    headers: {
      "x-key": "qeur-irut"
    }
  };

  const url = "http/riodeganeiro";

  const option = {
    'Authorization': "key",
    'Content-Type': 'application/json'
  }

  module.exports = {
    url,
    option,
    axios,
    body,
    request
  };
