var _ = require('lodash');

var config = {
    host: 'https://github.com',
    localPaths: [{
        hostRoute: '/test',
        localPath: './test',
    }],
};

try {
    localConfig = require('./config-local');
    config = _.extend(config, localConfig);
} catch (e) {
    console.log(e,'Cookie')
}

module.exports = config;