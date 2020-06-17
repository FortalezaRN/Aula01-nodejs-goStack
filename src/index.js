const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json())

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;
  const result = title
    ? projects.filter(proj => proj.title.includes(title))
    : projects
  return response.send(result);
});

app.post('/projects', (request, response) => {

  const { title, owner } = request.body;

  const project = {
    id: uuid(),
    title,
    owner
  }

  projects.push(project)

  return response.send(project);
});

app.put('/projects/:id', (request, response) => {
  
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIdex = projects.findIndex(proj => proj.id === id);

  if(projectIdex < 0)
    return response.status(400).json({ error: "Project not found" });
  
  const project = {
    id,
    title,
    owner
  }

  projects[projectIdex] = project;

  return response.send(project);
});
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIdex = projects.findIndex(proj => proj.id === id);

  if(projectIdex < 0)
    return response.status(400).json({ error: "Project not found" });

  projects.splice(projectIdex, 1);

  return response.status(204).send();

});

app.listen(3333)