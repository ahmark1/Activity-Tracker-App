const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection successful.')
})

app.post("/api/action/addActivity", (req, res) => {
    console.log(req.body.date);
})

const activityRouter = require('./routes/activities');

app.use('/activities', activityRouter);

app.listen(8000, () => {
    console.log("Server running on port 8000.")
})