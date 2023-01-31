const express = require('express');
const app = express();
const fetch = require('./fetch');

app.use(express.static('./public'));

app.get('/:api', fetch, (req, res) => {
  res.status(200).json(res.data);
});

app.listen(4000, () => {
  console.log('Server started');
});
