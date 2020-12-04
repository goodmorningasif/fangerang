const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

  
// app.set('view engine', 'jsx');s

// app.use(express.static(__dirname + '/dist'));

// .get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
// app.get('/', (res, req) => res.send(JSON.stringify({ Hello: 'World'})));

app.listen(port, () => console.log(`Listening on port ${port} : ${process.env.PORT}`));

