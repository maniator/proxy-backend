const config = require('./config/config');
const proxy = require('express-http-proxy');
const express = require('express');
const app = require('express')();
const _ = require('lodash');

console.log(config);

app.set('port', config.defaultPort || 7769);

_.each(config.localPaths, function (route) {
    app.use(route.hostRoute, express.static(route.localPath));
});

app.all('*', proxy(config.host, {
    forwardPath: function(req, res) {
        return require('url').parse(req.url).path;
    },
}));


const server = app.listen(app.get('port'), function () {
    var host = server.address().address,
        port = server.address().port;

    console.info('Express Instance, listening at http://%s:%s', host, port);
});