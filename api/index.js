const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

// ROUTERS
app.use('/api/user', user);

// SERVIDOR ACTIVO
app.listen(config.api.port, () => {
    console.log(`Servidor corriento en el puerto => ${config.api.port}`);
});

