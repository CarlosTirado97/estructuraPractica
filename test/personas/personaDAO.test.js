const assert = require('chai').assert
const sinon = require('sinon')
const proxiquire = require('proxyquire')
const {getAll} = require('./data')

class BaseDaoStub {
    async traer() {}
}

let PersonaDAO
let personaDAO
let sandbox
let personaDaoMock

beforeEach(() => {
    sandbox = sinon.createSandbox()
    BaseDaoStub.prototype.traer = sandbox.stub()
    BaseDaoStub.prototype.traer.withArgs().returns(Promise.resolve(getAll()))

    PersonaDAO = proxiquire('../../src/datos/PersonaDAO', {
        './BaseDAO': BaseDaoStub
    })
    //personaDAO = new PersonaDAO()
    //personaDaoMock = sandbox.mock(personaDAO)
    
})

afterEach(() => {
    sandbox.restore()
    //personaDaoMock.restore()
})

describe('get_personas', async() => {
    it('should get all the persons', async() => {
        const personaDAO = new PersonaDAO()
        const personas = await personaDAO.traerPersonas()
        
        sinon.assert.calledOnce(BaseDaoStub.prototype.traer)
        assert.deepEqual(getAll(), personas)
    })
})
