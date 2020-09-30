 function clientesRendasAcServices(url, request, axios) {
  console.debug("request", request);
  console.debug("urlComplete", url);
  return axios.patch(url, request.body, { ...request.headers});
}

module.exports = {
  clientesRendasAcServices
 };
