const AWS_SDK = require("aws-sdk");
const dynamoDbValue = require("dynamodb-value");
const { AWS }= require("./constants");
const managedDynamo = require("./managedDynamo");
AWS_SDK.config.update({ region: AWS.REGION });
const dynamoDb = new AWS_SDK.DynamoDB({ apiVersion: AWS.DYNAMO_VERSION });

module.exports = {
  getValueParam: (idParam) => managedDynamo.getValueParam(idParam, dynamoDbValue, dynamoDb)
}
