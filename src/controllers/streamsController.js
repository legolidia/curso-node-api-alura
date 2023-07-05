import mongoose from 'mongoose';

export default class StreamController {
  static showStreams(req, res) {
    const StreamModel = mongoose.model('Streaming'); // Acessa a coleção diretamente no banco de dados

    StreamModel.find((err, streams) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar streams' });
      } else {
        res.status(200).json(streams);
      }
    });
  }

  static getStreamById(req, res) {
    const streamId = req.params.id;
    const StreamModel = mongoose.model('Streaming'); // Acessa a coleção diretamente no banco de dados

    StreamModel.findById(streamId, (err, stream) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar stream por ID' });
      } else if (!stream) {
        res.status(404).json({ error: 'Stream não encontrado' });
      } else {
        res.status(200).json(stream);
      }
    });
  }
}
