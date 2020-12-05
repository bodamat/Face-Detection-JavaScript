const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static( path.join(__dirname, 'client') ));

app.listen(port, () => console.log("Server starter on port " + port));