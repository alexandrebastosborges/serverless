"use strict";

async function adicionaisHandler(event, _context, adicionaisController) {
  console.log(event);
  const { headers, body, path }= event;
  const response = adicionaisController({ headers, body, path });
  console.log(response);
  return response;
}

async function filiaisClientesHandler(event, _context, filiaisClientesController) {
  console.log(event);
  const { headers, body, path }= event;
  const response = filiaisClientesController({ headers, body, path });
  console.log(response);
  return response;
}

async function situacoesAtualizacaoCadastroHandler(event, _context, situacoesAtualizacaoCadastroController) {
  console.log(event);
  const { headers, body, path }= event;
  const response = situacoesAtualizacaoCadastroController({ headers, body, path });
  console.log(response);
  return response;
}


async function cpfClientesHandler(event, _context, cpfClientesController) {
  console.log(event);
  const { headers, body, path }= event;
  const response = cpfClientesController({ headers, body, path });
  console.log(response);
  return response;
}

async function clientesRendasObHandler(event, _context, clientesRendasObController) {
  console.log(event);
  const { headers, body, path }= event;
  const response = clientesRendasObController({ headers, body, path });
  console.log(response);
  return response;
}

async function _4_Handler(event, _context, _4_Controller) {
  console.log(event);
  const { headers, body, path }= event;
  const response = _4_Controller({ headers, body, path });
  console.log(response);
  return response;
}

module.exports = {
  adicionaisHandler,
  filiaisClientesHandler,
  situacoesAtualizacaoCadastroHandler,
  cpfClientesHandler,
  clientesRendasObHandler,
  _4_Handler
};
