 function  cpfClientesServices(url, request, axios) {
  console.debug("request", request);
  const { pathParameters } = request;
  const urlComplete =`${url}/${pathParameters.cpf}`;
  console.debug("urlComplete", url);
  return axios.get(urlComplete);
}

module.exports = {
  cpfClientesServices
 };
