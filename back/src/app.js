const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const cors = require("cors");
const morgan = require("morgan");
const express = require('express');
const app = express();

const corsOptions = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()) // para que funcione mi servidor con formato JSON
// server.use(cors()); // habilito a todos a hacer solicitudes a mi server
app.use(morgan("dev"));
app.use("/rickandmorty", router);
app.use("/favs", favsRouter);

module.exports = app;