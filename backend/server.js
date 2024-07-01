const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const timelineRoutes = require('./routes/timeline');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/timeline-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/timelines', timelineRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
