'use strict';

module.exports = {
    env: 'development',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            ''
    }
};