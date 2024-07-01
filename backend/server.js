const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const timelineRoutes = require('./routes/timeline');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

mongoose.connect(process.env.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/timelines', timelineRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
