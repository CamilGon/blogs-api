const express = require('express');

const { validateUser } = require('./middlewares/validateUser');
const validateToken = require('./middlewares/validateToken');
const { getAllUsers, login, getUserById, createUser } = require('./controller/userController');
const { createCategory, getAllCategories } = require('./controller/categoryController');
const { getAllPostss } = require('./controller/postController');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.get('/user', validateToken, getAllUsers);
app.get('/user/:id', validateToken, getUserById);
app.post('/user', validateUser, createUser);
app.post('/categories', validateToken, createCategory);
app.get('/categories', validateToken, getAllCategories);
app.get('/post', validateToken, getAllPostss);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
