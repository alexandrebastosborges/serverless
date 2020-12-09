 function clientesRendasObServices(url, request, axios) {
  console.debug("request", request);
  const options = {
    headers: {
      "content-type": "application/json",
      "access_token": request.headers.access_token,
      "client_id": request.headers.client_id,
      "authorization": request.headers.Authorization
    }
};
  const { pathParameters } = request;
  const urlComplete =`${url}/${pathParameters.cpf}/rendas`;
  console.debug("urlComplete", url);
  return axios.get(urlComplete, options);
}

module.exports = {
  clientesRendasObServices
 };
