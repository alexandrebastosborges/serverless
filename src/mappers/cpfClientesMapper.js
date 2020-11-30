"use strict";
const toResponseWithSecurityHeaders = require("./shared/securityHeadersMapper");
const toLambdaResponse = require('./shared/lambdaResponseMapper')

module.exports = { toResponseWithSecurityHeaders, toLambdaResponse };
