"use strict";
const expect = require("chai").expect;
const {getValueParam} = require("../../src/commons/managedDynamo");
const MOCKS = require("../mocks/commons/managedDynamo.mock");

describe("managedDynamo try path test suite", () => {
  let dynamo;
  beforeEach(() => {
    dynamo = (idParam) => getValueParam(idParam, MOCKS.dynamoDbValue, MOCKS.dynamoDb);
  });
  it("managedDynamo if path should return an object", async () => {
    const result = await dynamo(MOCKS.idParam);
    expect(result).to.exist;
  });
  afterEach(() => {
    dynamo = null;
  });
});

 describe("managedDynamo try path test suite", () => {
  let dynamo;
  beforeEach(() => {
    dynamo = (idParam) => getValueParam(idParam, MOCKS.dynamoDbValue, MOCKS.dynamoDbElse);
  });
  it("managedDynamo else path should return an object", async () => {
    try{
      await dynamo(MOCKS.idParam);
    }catch(error){
      expect(error.message).to.be.equals('Item no found');
    }
  });
  afterEach(() => {
    dynamo = null;
  });
});

describe("managedDynamo catch path test suite", () => {
  let dynamo;
  beforeEach(() => {
    dynamo = (idParam) => getValueParam(idParam, MOCKS.dynamoDbValue, MOCKS.dynamoDbError);
  });
  it("managedDynamo should return Error API", async () => {
    try{
      await dynamo(MOCKS.idParam);
    }catch(error){
      console.log(JSON.stringify(error.message));
      expect(error.message).to.be.equals('Error');
    }
  });
  afterEach(() => {
    dynamo = null;
  });
});
