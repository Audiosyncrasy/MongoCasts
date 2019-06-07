const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new driver', done => {
    // count # of drivers before test
    Driver.count().then(count => {
      // execute test
      request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' })
      .end(() => {
        Driver.count().then(newCount => {
          assert(count + 1 === newCount);
          done();
        })
      })
    });
  });
});