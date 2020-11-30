"use strict";
const toResponseWithSecurityHeaders = require("./shared/securityHeadersMapper");
const toLambdaResponse = require('./shared/lambdaResponseMapper')

function toXML(json) {
  const {
          cpf
        } = json.pathParameters;
  const {
    produto,
    canal
  } = json.queryString;
  console.debug(`cpf ${cpf}`);
  console.debug(`produtos ${produto}`);
  console.debug(`canal ${canal}`);

  return `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  	<soapenv:Body>
  		<int:disponibilidadeLimite xmlns:int="http://interfaces.ws.contaservice.riachuelo.com.br/">
  			<request>
  				<cpf>  ${cpf}  </cpf>
  				<produtos>  ${produto} </produtos>
  				<canal>  ${canal}  </canal>
  			<request>
  		</int:disponibilidadeLimite>
  	</soapenv:Body>
  </soapenv:Envelope>
  `;
}

 async function mapXMLToJSON (xml) {
  const parsedJSON = await xml2js.toParseXML(xml);
  const items = parsedJSON[ENVELOPE][BODY];
  items
    .filter((item) => item[':EnviaSMSResponse'])
    .flatMap((item) => item[':EnviaSMSResponse'])
    .filter((item) => item[':EnviaSMSResult'])
    .map((item) => item[':EnviaSMSResult'])
    .map((item) => ({
      Codigo: item[':Codigo'],
      Mensagem: item[':Mensagem'],
      Objeto: item[':Objeto'],
    }));
  return { DepartamentosDeCompras: items.length === 1 ? items[0] : items };
};

module.exports = { toResponseWithSecurityHeaders, toLambdaResponse, toXML, mapXMLToJSON };
