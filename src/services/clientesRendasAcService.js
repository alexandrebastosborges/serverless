 function clientesRendasAcServices(url, request, axios) {
  console.debug("request", request);
  const { pathParameters } = request;
  const urlComplete =`${url}/${pathParameters.cpf}/rendas`;
  console.debug("urlComplete", url);
  return axios.patch(urlComplete, request.body, { ...request.headers});
}

module.exports = {
  clientesRendasAcServices
 };
