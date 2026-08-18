const bunyan = require('bunyan');

const ambiente = process.env.NODE_ENV || 'devolopment';

const configLogger = {
    name: 'pokemon-gateway',
    streams: []
};

if (ambiente === 'production') {
    configLogger.streams.push({
        level: 'info',
        path: './logs-de-produção.log'
    });
} else {
    configLogger.streams.push({
        level: 'debug',
        stream: process.stdout
    });
}

const log = bunyan.createLogger(configLogger);

module.exports = log;