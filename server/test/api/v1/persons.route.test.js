const supertest = require('supertest');
const jestOpenAPI = require('jest-openapi');

const app = require('../../../src/app');
const { pathToApiSpec } = require('../../config');

jestOpenAPI(pathToApiSpec);

describe('/api/v1/persons', () => {
  describe('GET', () => {
    it('returns 200 and a list of all persons', async () => {
      const res = await supertest(app).get('/api/v1/persons');
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });
  });
});
