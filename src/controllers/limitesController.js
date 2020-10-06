"use strict";

const { BACK_END_PARAMETERS } = require("../commons/constants");

async function limites(
  request,
  eventosService,
  getValueParam,
  requestMapper
) {
  try {
    const backEndObject = await getValueParam(BACK_END_PARAMETERS.CLIENTE);
    const urlBackEnd = backEndObject.valueParam;
    const bodyxml = requestMapper.toXML(request);
    const APIResponsexml = await eventosService.limitesServices(urlBackEnd,{...request, body: { bodyxml } });
    const APIResponse = requestMapper.mapXMLToJSON( APIResponsexml );
    console.log("response", APIResponse );
    const response = requestMapper.toLambdaResponse(APIResponse);
    requestMapper.toResponseWithSecurityHeaders(response);
    return response;
  } catch (error) {
    console.error(error);
    return requestMapper.toLambdaResponse(error.response || error);
  }
}

module.exports = limites;

