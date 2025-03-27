const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes);

module.exports = app;
