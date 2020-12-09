const { AWS } = require("../commons/constants");

const params = {
  TableName: AWS.TABLE_NAME,
  ProjectionExpression: AWS.DYNAMO_PROJECTION_EXPRESSION,
};

async function getValueParam(idParam, dynamoDbValue, dynamoDb) {
  let data;
  console.info({ idParam });
  try {
    data = await dynamoDb
      .getItem({
        ...params,
        Key: {
          idParam: { S: idParam },
        },
      })
      .promise();
  } catch (error) {
    console.error({ error });
    throw  new Error(error);
  }
  console.info({ item: data.item });
  if (data.Item) {
    return dynamoDbValue.toJavascript(data.Item);
  } else {
    throw  new Error("Item no found");
  }
}

module.exports = { getValueParam };
