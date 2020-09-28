"use strict";

const { BACK_END_PARAMETERS } = require("../commons/constants");

async function cpfClientes(
  request,
  eventosService,
  getValueParam,
  requestMapper
) {
  try {
    const backEndObject = await getValueParam(BACK_END_PARAMETERS.CLIENTE);
    const urlBackEnd = backEndObject.valueParam;
    console.log("aqui",  eventosService);
    console.log("aqui 2",  requestMapper);
    const APIResponse = await eventosService.cpfClientesServices(urlBackEnd, request);
    console.log("response", APIResponse );
    const response = requestMapper.toLambdaResponse(APIResponse);
    requestMapper.toResponseWithSecurityHeaders(response);
    return response;
  } catch (error) {
    console.error(error);
    return requestMapper.toLambdaResponse(error.response || error);
  }
}

module.exports = cpfClientes;

