'use strict';

module.exports = {
    env: 'production',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            ''
    }
};