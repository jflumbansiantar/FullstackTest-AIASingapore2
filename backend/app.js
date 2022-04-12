const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const route = require("./routes/index");

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// routes
app.use(route);

// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
