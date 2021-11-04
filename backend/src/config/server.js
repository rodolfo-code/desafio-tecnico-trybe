const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const PORT = 3003;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
