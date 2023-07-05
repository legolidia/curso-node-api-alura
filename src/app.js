import express from 'express';
import StreamController from './controllers/streamsController.js';
import mongoose from 'mongoose';
import compression from 'compression';

const app = express();
const port = process.env.PORT || 3001;

// Conexão com o banco de dados
mongoose.connect('mongodb+srv://admin:lfs123@teste.vhm25nb.mongodb.net/teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Conectado ao banco de dados');
});

// Configurações do aplicativo
app.use(express.json({ limit: '200mb' }));
app.use(compression());

// Rotas
app.get('/', (req, res) => {
  res.status(200).send('Wrapped');
});

app.get('/streams', StreamController.showStreams);
app.get('/streams/:id', StreamController.getStreamById);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

export default app;
