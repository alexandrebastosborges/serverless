function toLambdaResponse(response) {
  console.info({ response });
  const { data , message, headers, status } = response;
  return {
    headers: headers || {},
    statusCode: status || 500,
    body: JSON.stringify(data || message || "Internal server error"),
  };
}

module.exports = toLambdaResponse;

