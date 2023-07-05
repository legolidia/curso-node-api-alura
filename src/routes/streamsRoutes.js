import express from "express";
import StreamController from "../controllers/streamsController.js";

const router = express.Router();

router.route('/streams/:_id')
  .get(StreamController.getStreamById)

router.route('/streams')
  .get(StreamController.showStreams)

export default router;