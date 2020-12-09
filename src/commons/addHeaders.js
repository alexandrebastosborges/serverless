function addHeaders(response, headers) {
  headers.forEach((header) => {
    insertIfNotExits(response, header);
  });
}

function insertIfNotExits(response, header) {
  const [key, value] = Object.entries(header)[0];
  if (response.headers[key] === "" || response.headers[key] === undefined) {
    response.headers[key] = value;
  }
}

module.exports = {
  addHeaders,
};
