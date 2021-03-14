"use strict";

const expect = require("chai").expect;
const controller = require("../../src/controllers/adicionaisController");
const mocks = require("../mocks/controllers/adicionaisController.mock");

describe("Controller if", () => {
  let eventoController;

  beforeEach(() => {
    eventoController = (body) =>
      controller(body, mocks.eventosService, mocks.getValueParam, mocks.requestMapper);
  });

  it("should return success response", async () => {
    const result = await eventoController(mocks.requestIf);
    expect(result).to.deep.equal({});
  });

  afterEach(() => {
    eventoController = null;
  });
});

describe("Controller error ", () => {
  let eventoController;

  beforeEach(() => {
    eventoController = (body) =>
      controller(body, mocks.eventosServiceError, mocks.getValueParam, mocks.requestMapper);
  });

  it("should return error response", async () => {
    try{
      await eventoController(mocks.body);
    }catch(error){
      expect(error).to.deep.equal({});
    }
  });

  afterEach(() => {
    eventoController = null;
  });
});
