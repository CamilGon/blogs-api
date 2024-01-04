const express = require('express');

const { validateUser } = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');
const userController = require('./controller/userController');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.login);
app.get('/user', validateToken, userController.getAllUsers);
app.post('/user', validateUser, userController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
