"use strict";

async function adicionaisHandler(event, _context, adicionaisController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = adicionaisController({ headers, body, pathParameters });
  console.log(response);
  return response;
}

async function filiaisClientesHandler(event, _context, filiaisClientesController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = filiaisClientesController({ headers, body, pathParameters });
  console.log(response);
  return response;
}

async function situacoesAtualizacaoCadastroHandler(event, _context, situacoesAtualizacaoCadastroController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = situacoesAtualizacaoCadastroController({ headers, body, pathParameters });
  console.log(response);
  return response;
}


async function cpfClientesHandler(event, _context, cpfClientesController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = cpfClientesController({ headers, body, pathParameters });
  console.log(response);
  return response;
}

async function clientesRendasObHandler(event, _context, clientesRendasObController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = clientesRendasObController({ headers, body, pathParameters });
  console.log(response);
  return response;
}

async function clientesRendasAcHandler(event, _context, clientesRendasAcController) {
  console.log(event);
  const { headers, body, pathParameters }= event;
  const response = clientesRendasAcController({ headers, body, pathParameters });
  console.log(response);
  return response;
}

module.exports = {
  adicionaisHandler,
  filiaisClientesHandler,
  situacoesAtualizacaoCadastroHandler,
  cpfClientesHandler,
  clientesRendasObHandler,
  clientesRendasAcHandler
};
