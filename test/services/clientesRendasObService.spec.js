"use strict";

const expect = require("chai").expect;
const service = require("../../src/services/clientesRendasObService");
const mocks = require("../mocks/services/services.mock");

describe("Service", () => {
  let eventosService;

  beforeEach(() => {
    eventosService = (url, body) => service.clientesRendasObServices(url, body, mocks.axios);
  });

  it("should return true", async () => {
    const result = await eventosService(mocks.url, mocks.request);
    expect(result.response).include("GET");
  });

  afterEach(() => {
    eventosService = null;
  });
});

