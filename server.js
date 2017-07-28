'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT||3000;
const app = express();

app.use(express.static('./public'));

function proxyGitHub(request, response){
  console.log(`Routing GitHub request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${githubToken}`}
  }))(request, response);
}
app.get('/github/*', proxyGitHub);

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
