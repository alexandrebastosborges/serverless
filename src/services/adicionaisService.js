 function adicionaisServices(url, request, axios) {
  console.debug("request", request);
  const { pathParameters } = request;
  const urlComplete =`${url}/adicionais/${pathParameters.cpf}`;
  console.debug("urlComplete", url);
  const options = {
    ...request.headers
  };
  return axios.get(urlComplete);
}

module.exports = {
  adicionaisServices
 };
