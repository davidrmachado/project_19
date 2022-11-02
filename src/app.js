const express = require('express');

const app = express();

const loginController = require('./controllers');

app.use(express.json());

app.post('/login', loginController.loginValidation);

// É muito importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
