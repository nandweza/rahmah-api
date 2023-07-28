const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const messageRouter = require('./routes/messageRoutes');

const app = express();

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));

app.use('/api/message/', messageRouter);

module.exports = app;
