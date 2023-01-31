const url1 = 'https://jsonplaceholder.typicode.com/todos/';
const url2 = 'https://www.boredapi.com/api/activity';
const https = require('https');
const fetch = (url) =>
  new Promise((resolve, reject) => {
    {
      const request = https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });
      });

      request.on('error', (error) => {
        reject(error);
      });

      request.end();
    }
  });

//let url = process.argv[0];

// fetch(url2).then(res=>console.log(res,typeof(res))).catch(err=>console.log(err));

module.exports = (req, res, next) => {
  let { api } = req.params;
  const fun = async (url) => {
    res.data = await fetch(url)
      .then((res) => JSON.parse(res))
      .catch((e) => e);
    next();
  };

  switch (api) {
    case 'bored':
      fun(url2);
      break;
    case 'json':
      fun(url1);
      break;
    default:
      res.data = 'undefined';
  }
};
