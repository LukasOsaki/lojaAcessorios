const express = require('express');
const mongoose  = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require("cors");

mongoose.connect("mongodb://localhost/testeTgid", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);