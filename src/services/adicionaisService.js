 function adicionaisServices(url, request, axios) {
  console.debug("request", request);
  console.debug("urlComplete", url);
  const options = {
    ...request.headers
  };
  return axios.get(url);
}

module.exports = {
  adicionaisServices
 };
