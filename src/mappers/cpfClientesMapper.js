"use strict";
const toResponseWithSecurityHeaders = require("./shared/securityHeadersMapper");
const toLambdaResponse = require('./shared/lambdaRequestMapper')

module.exports = { toResponseWithSecurityHeaders, toLambdaResponse };
