 function filiaisClientesServices(url, request, axios) {
  const options = { ...request.headers  };
  console.debug("request", request);
  const { pathParameters } = request;
  urlComplete =`${url}/empresas/${pathParameters.codigoEmpresa}/filiais/${pathParameters.codigoFilial}/clientes/${pathParameters.numeroCliente}`;
  console.debug("urlComplete", urlComplete);
  return axios.get(urlComplete, options);
}

module.exports = {
  filiaisClientesServices
 };
