const eventosService = {
  situacoesAtualizacaoCadastroServices: () => {
    return {};
  }
};

const eventosServiceError = {
  situacoesAtualizacaoCadastroServices: () => {
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
  body
};
