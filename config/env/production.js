'use strict';

module.exports = {
    env: 'production',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            'mongodb+srv://ezkow:4590@pisignage.gni79rg.mongodb.net/pisignage?retryWrites=true&w=majority'
    }
};