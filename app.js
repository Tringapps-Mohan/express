const express = require('express');
const app = express();
const fetch = require('./fetch');

app.use(express.static('./public'));

app.use(fetch);

app.get('/:api', (req, res) => {
  res.status(200).json(res.data);
});

app.listen(4000, () => {
  console.log('Server started');
});
