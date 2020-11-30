 function situacoesAtualizacaoCadastroServices(url, request, axios) {
  const options = { ...request.headers  };
  console.debug("request", request);
  const { pathParameters } = request;
  const urlComplete =`${url}/empresas/${pathParameters.codigoEmpresa}/filiais/${pathParameters.codigoFilial}/clientes/${pathParameters.numeroCliente}/situacoes-atualizacao-cadastro`;
  console.debug("urlComplete", urlComplete);
  return axios.get(urlComplete, options);
}

module.exports = {
  situacoesAtualizacaoCadastroServices
 };
