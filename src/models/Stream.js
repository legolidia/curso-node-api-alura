import mongoose from 'mongoose';

const streamSchema = new mongoose.Schema({
  ts: {
    type: Map,
    of: Date,
  },
  ms_played: {
    type: Map,
    of: Number,
  },
  master_metadata_track_name: {
    type: Map,
    of: String,
  },
  master_metadata_album_artist_name: {
    type: Map,
    of: String,
  },
  master_metadata_album_album_name: {
    type: Map,
    of: String,
  },
});

const streams = mongoose.model('streams', streamSchema);

export default streams;
