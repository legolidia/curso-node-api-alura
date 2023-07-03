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