'use strict';
const expect = require('chai').expect;
const {
  adicionaisHandler,
  clientesRendasObHandler,
  cpfClientesHandler,
  filiaisClientesHandler,
  situacoesAtualizacaoCadastroHandler
} = require('../src/handler');
const MOCKS = require('./mocks/handler.mock')

describe("Handler adicionaisHandler", ()=>{
    let eventoHandler;

    beforeEach(()=>{
        eventoHandler = (event, context) => adicionaisHandler(event, context, MOCKS.controllerMock)
    })

    it("should return true", async ()=>{
        const result = await eventoHandler(MOCKS.event, MOCKS.context);
        console.log("result",result);
        expect(result).to.be.true;
    })

    afterEach(()=>{
      eventoHandler = null;
    })
})

describe("Handler clientesRendasObHandler", ()=>{
  let eventoHandler;

  beforeEach(()=>{
      eventoHandler = (event, context) => clientesRendasObHandler(event, context, MOCKS.controllerMock)
  })

  it("should return true", async ()=>{
      const result = await eventoHandler(MOCKS.event, MOCKS.context);
      console.log("result",result);
      expect(result).to.be.true;
  })

  afterEach(()=>{
    eventoHandler = null;
  })
})

describe("Handler cpfClientesHandler", ()=>{
  let eventoHandler;

  beforeEach(()=>{
      eventoHandler = (event, context) => cpfClientesHandler(event, context, MOCKS.controllerMock)
  })

  it("should return true", async ()=>{
      const result = await eventoHandler(MOCKS.event, MOCKS.context);
      console.log("result",result);
      expect(result).to.be.true;
  })

  afterEach(()=>{
    eventoHandler = null;
  })
})

describe("Handler filiaisClientesHandler", ()=>{
  let eventoHandler;

  beforeEach(()=>{
      eventoHandler = (event, context) => filiaisClientesHandler(event, context, MOCKS.controllerMock)
  })

  it("should return true", async ()=>{
      const result = await eventoHandler(MOCKS.event, MOCKS.context);
      console.log("result",result);
      expect(result).to.be.true;
  })

  afterEach(()=>{
    eventoHandler = null;
  })
})

describe("Handler situacoesAtualizacaoCadastroHandler", ()=>{
  let eventoHandler;

  beforeEach(()=>{
      eventoHandler = (event, context) => situacoesAtualizacaoCadastroHandler(event, context, MOCKS.controllerMock)
  })

  it("should return true", async ()=>{
      const result = await eventoHandler(MOCKS.event, MOCKS.context);
      console.log("result",result);
      expect(result).to.be.true;
  })

  afterEach(()=>{
    eventoHandler = null;
  })
})
