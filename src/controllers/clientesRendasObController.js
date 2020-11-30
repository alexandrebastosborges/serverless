"use strict";

const { BACK_END_PARAMETERS } = require("../commons/constants");

async function clientesRendasOb(
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
    const APIResponse = await eventosService.clientesRendasObServices(urlBackEnd, request);
    console.log("response", APIResponse );
    const response = requestMapper.toLambdaResponse(APIResponse);
    response.headers = {};
    requestMapper.toResponseWithSecurityHeaders(response);
    return response;
  } catch (error) {
    console.error(error);
    return requestMapper.toLambdaResponse(error.response || error);
  }
}

module.exports = clientesRendasOb;

