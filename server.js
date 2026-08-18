const express = require('express');
const helmet = require('helmet');
const config = require('./config/config');
const routes = require('./routes/routes');
const log = require('./common/logger');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/', routes);

app.listen(config.port, () => {
    log.info(`Servidor seguro rodando na porta ${config.port}`);
});

module.exports = app;