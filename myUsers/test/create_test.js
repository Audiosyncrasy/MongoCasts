// assertion library
const assert = require('assert');
const User = require('../src/user');

// every file that will be called by mocha needs
// a describe block (i.e., function)

describe('Creating records', () => {
    it('saves a user', (done) => {
        // assertion: a piece of code that claims
        // one piece of data is equal to another
        const joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                // has Joe been saved successfully?
                assert(!joe.isNew);
                done();
            });
    });
});