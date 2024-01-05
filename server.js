const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process. env. PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});