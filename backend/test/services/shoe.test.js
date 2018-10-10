const assert = require('assert');
const app = require('../../src/app');

describe('\'shoe\' service', () => {
  it('registered the service', () => {
    const service = app.service('shoes');

    assert.ok(service, 'Registered the service');
  });
});
