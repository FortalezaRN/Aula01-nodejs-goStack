const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.send([
    'Project 1',
    'Project 2'
  ]);
});

app.post('/projects', (request, response) => {
  return response.send([
    'Project 1',
    'Project 2',
    'Project 3'
  ]);
});

app.put('/projects', (request, response) => {
  return response.send([
    'Project 4',
    'Project 2',
    'Project 3'
  ]);
});
app.put('/projects', (request, response) => {
  return response.send([
    'Project 2',
    'Project 3'
  ]);
});

app.listen(3333)