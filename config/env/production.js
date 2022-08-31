'use strict';

module.exports = {
    env: 'production',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            'mongodb://ezkow:4590@ac-ev8m1nw-shard-00-00.gni79rg.mongodb.net:27017,ac-ev8m1nw-shard-00-01.gni79rg.mongodb.net:27017,ac-ev8m1nw-shard-00-02.gni79rg.mongodb.net:27017/?ssl=true&replicaSet=atlas-ls58ts-shard-0&authSource=admin&retryWrites=true&w=majority'
    }
};