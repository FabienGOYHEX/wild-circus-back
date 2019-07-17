// Call dependencies require, define the port of the server and files require

const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

const artists = require("./artists.json");
const shows = require("./shows.json");
const showsMap = require("./showsMap.json");

app.use(cors());

// Routes GET

// Call artists.json

app.get("/artists", (req, res) => {
    res.status(200).send(artists);
});

// Call shows.json

app.get("/shows", (req, res) => {
    res.status(200).send(shows);
});

app.get("/shows/map", (req, res) => {
    res.status(200).send(showsMap);
});


app.listen(port, err => {
    if (err) {
        throw new Error("Something bad happened...");
    }

    console.log(`Server is listening on ${port}`);
});
