import express from 'express';
import streamingData from '../streamingData.json' assert {type: 'json'};
import db from './config/dbConnect.js';
import streams from './models/Stream.js';

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado ao banco de dados");
});

const app = express();

app.use(express.json());

//const data = streamingData;

app.get('/', (req, res) => {
  res.status(200).send('Wrapped');
})

app.get('/streams', (req, res) => {
  streams.find((err, data) => {
    res.status(200).json(streams);
  })
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