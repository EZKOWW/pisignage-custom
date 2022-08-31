'use strict';

module.exports = {
    env: 'test',
    mongo: {
        uri:process.env.MONGOLAB_URI ||
            ''
    }
};