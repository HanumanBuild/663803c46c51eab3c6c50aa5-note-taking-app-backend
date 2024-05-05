const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DBNAME })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/notes', noteRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});