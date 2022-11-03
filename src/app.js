const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);

// É muito importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;
