const expect = require("chai").expect;
const Mapper = require("../../src/mappers/shared/lambdaResponseMapper");
const MOCKS = require("../mocks/mappers/mapper.mock");

describe("Get Termos Mapper", () => {
  it("should return a lambda response from axios request", async () => {
    const result = await Mapper(MOCKS.request);
    expect(result).to.have.all.keys("statusCode", "headers", "body");
  });

  it("should return a lambda response from error", async () => {
    const result = await Mapper(MOCKS.error);
    expect(result).to.have.all.keys("statusCode", "headers", "body");
  });
});
