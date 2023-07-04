import express from 'express';
import streamingData from '../streamingData.json' assert {type: 'json'};

const app = express();

app.use(express.json());

const data = streamingData;

app.get('/', (req, res) => {
  res.status(200).send('Wrapped');
})

app.get('/data', (req, res) => {
  res.status(200).json(data);
})

export default app

/*
app.put('/data/:id', (req, res) => {
  let index = searchData(req.params.id);
  data[index].titulo = req.body.titulo;
  res.json(data);
}) 

app.get('/data/:id', (req, res) => {
  let index = searchData(req.params.id);
  res.json(data[index]);
}) 

function searchData(id) {
  return data.findIndex(stream => stream.id === id)
}

*/