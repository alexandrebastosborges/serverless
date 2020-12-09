"use strict";
const expect = require("chai").expect;
const {addHeaders} = require("../../src/commons/addHeaders");
const MOCKS = require("../mocks/commons/addHeaders.mock");

describe("addHeaders test suite", () => {
  it("should addHeaders if not exists", async () => {
    addHeaders(MOCKS.request, MOCKS.basicHeader);
    expect(MOCKS.request.headers).to.property("mock");
  });

  it("should override header if exists", async () => {
    addHeaders(MOCKS.request, MOCKS.overrideHeader);
    expect(MOCKS.request.headers.mock).to.equal("mockHeader");
  });
});
