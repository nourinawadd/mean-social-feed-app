const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/', postRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
