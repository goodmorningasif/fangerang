const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

  
// app.set('view engine', 'jsx');

// app.use(express.static(__dirname + '/dist'));

// .get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
// app.get('/', (res, req) => res.send(JSON.stringify({ Hello: 'World'})));

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.listen(port, () => console.log(`Listening on port ${port} : ${process.env.PORT}`));

