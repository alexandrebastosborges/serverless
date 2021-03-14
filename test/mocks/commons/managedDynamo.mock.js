const dynamoDbValue = {
  toJavascript: () => true
};

const dynamoDb = {
  getItem:() =>{
    return {
    promise:() => {
      return {
        Item: true
        }
     }
    }
  }
};

const dynamoDbElse = {
  getItem: () => {
    return {
      promise:() => {
        return {
          Count: true
        }
      }
    }
  }
};

const dynamoDbError = {
  getItem: () => {
    return {
      promise:() => {
        throw new Error();
      }
    }
  }
};

const idParam = true


module.exports = {
  dynamoDbValue,
  dynamoDb,
  dynamoDbElse,
  dynamoDbError,
  idParam
};
