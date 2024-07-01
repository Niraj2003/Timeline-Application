const express = require('express');
const Timeline = require('../models/Timeline');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const { date, description } = req.body;
  const timeline = new Timeline({ userId: req.user.id, date, description });
  await timeline.save();
  res.status(201).send('Timeline added');
});

router.get('/', authenticate, async (req, res) => {
  const timelines = await Timeline.find({ userId: req.user.id });
  res.json(timelines);
});

module.exports = router;
