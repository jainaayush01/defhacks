const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const routes = require('./routes/main.js');


const app = express();

const DB = process.env.DB;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
const connection = mongoose.connection;
connection.on("error", () => console.log("connection error"));
connection.once("open", () => {
    console.log("connection success");
});

app.use(cors());
routes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log("server running on port " + PORT))