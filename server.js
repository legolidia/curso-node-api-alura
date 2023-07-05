import app from '../app';
import express from 'express';

const port = process.env.PORT || 3001;

app.use(express.json({ limit: '100mb' }));


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});