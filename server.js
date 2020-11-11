const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

express()
  .use(express.static(__dirname + '/dist'))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
  .listen(port, () => console.log(`Listening on port ${port} : ${process.env.PORT}`));

