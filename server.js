'use strict';

const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('./public'));

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
