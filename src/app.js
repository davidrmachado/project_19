const express = require('express');

// require('express-async-errors');

const app = express();

const routes = require('./routes');

// const { loginController, userController } = require('./controllers');

// const { validateLogin } = require('./middlewares/userValidation');

app.use(express.json());
app.use(routes);

// app.post('/login', loginController.loginValidation);
// app.post('/user', userController.registerUser);
// app.get('/user', validateLogin, userController.getAllUsers);
// app.get('/user/:id', validateLogin, userController.getUserById);

// É muito importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
