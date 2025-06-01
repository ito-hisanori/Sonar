const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = 3000;
const config = require('./config');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to express!');
});

app.listen(PORT, () => {
  // console.log('Start server port:3000');
});

// sign up
app.post('/signup', (req, res) => {
  const payload = {
    firstname: req.body.firstname,
    familyname: req.body.familyname,
    email: req.body.email,
    password: req.body.password,
  };

  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

  const body = {
    firstname: req.body.firstname,
    familyname: req.body.familyname,
    email: req.body.email,
    password: req.body.password,
    token: token,
  };

  res.status(200).json(body);
});
