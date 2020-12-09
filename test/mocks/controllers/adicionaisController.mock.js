const eventosService = {
  adicionaisServices: () => {
    return {};
  }
};

const eventosServiceError = {
  adicionaisServices: () => {
    throw {};
  }
};

const requestMapper = {
  toResponseWithSecurityHeaders: () => {

  },
  toLambdaResponse: () => {
    return {};
  },
};


const getValueParam = () => {
  return {
    valueParam: true,
  };
};

const getValueParamError = () => {
  throw {
      message: true,
    };
};

const validacoesPostThrow = () => {
  throw {
    message: true,
  };
};

const body = {};


const requestIf = {
  body:{
    "codigoProducto": 1
  },
  headers: {
    "app-version-name": "400",
    "plataform": "iOS",
    "platform": "android"
  }
};

const requestElse = {
  body:{
    "codigoProducto": "1"
  },
  headers: {
    "app-version-name": "400",
    "plataform": "iOS",
    "platform": "android"
  }
};

const url = "http/riodeganeiro";

const option = {
  'Authorization': "key",
  'Content-Type': 'application/json'
}

module.exports = {
  getValueParamError,
  getValueParam,
  validacoesPostThrow,
  requestMapper,
  eventosService,
  eventosServiceError,
  requestElse,
  requestIf
};
