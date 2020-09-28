 function  cpfClientesServices(url, request, axios) {
  console.debug("request", request);
  console.debug("urlComplete", url);
  return axios.get(url);
}

module.exports = {
  cpfClientesServices
 };
