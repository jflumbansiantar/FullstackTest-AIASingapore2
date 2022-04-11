const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
// const route = require("./routes/index");
// const errorHandler = require("./middlewares/errorHandler");

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// routes
// app.use(route);
// app.use(errorHandler);

// server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
