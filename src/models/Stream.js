import mongoose from "mongoose";

const streamSchema = new mongoose.Schema(
  {
    ts: { type: Date, required: true },
    ms_played: { type: Number, required: true },
    master_metadata_track_name: { type: String, required: true },
    master_metadata_album_artist_name: { type: String, required: true },
    master_metadata_album_album_name: { type: String, required: true }
}
);

const streams = mongoose.model('streams', streamSchema);

export default streams;

