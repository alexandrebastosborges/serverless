module.exports = Object.freeze({
  BACK_END_PARAMETERS: {
    CLIENTE :"cliente"
  },
  AWS: {
    REGION: process.env.REGION,
    DYNAMO_VERSION: '2012-08-10',
    TABLE_NAME: process.env.TABLE_NAME,
    DYNAMO_PROJECTION_EXPRESSION: "valueParam"
  },
  HTTP: {
    POST: "POST"
  }
})
