const express = require('express');
const app = express();


app.get('/', async(req, res, next) => {
  res.send(`
  <html>
    <body>
      The Acme Movie Api
    </body>
  </html>
  `)
})

module.exports = app;