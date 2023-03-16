//Sample for Assignment 3
const express = require("express");

//Import a body parser module to be able to access the request body as json
const bodyParser = require("body-parser");

//Use cors to avoid issues with testing on localhost
const cors = require("cors");

const app = express();

const port = 3000;

//Tell express to use the body parser module
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());

//Set Cors-related headers to prevent blocking of local requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//The following is an example of an array of two tunes.The content has been shortened to make it readable
const tunes = [
  {
    id: "0",
    name: "Für Elise",
    genreId: "1",
    content: [
      { note: "E5", duration: "8n", timing: 0 },
      { note: "D#5", duration: "8n", timing: 0.25 },
      { note: "E5", duration: "8n", timing: 0.5 },
      { note: "D#5", duration: "8n", timing: 0.75 },
      { note: "E5", duration: "8n", timing: 1 },
      { note: "B4", duration: "8n", timing: 1.25 },
      { note: "D5", duration: "8n", timing: 1.5 },
      { note: "C5", duration: "8n", timing: 1.75 },
      { note: "A4", duration: "4n", timing: 2 },
    ],
  },
  {
    id: "1",
    name: "Seven Nation Army",
    genreId: "0",
    content: [
      { note: "E5", duration: "4n", timing: 0 },
      { note: "E5", duration: "8n", timing: 0.5 },
      { note: "G5", duration: "4n", timing: 0.75 },
      { note: "E5", duration: "8n", timing: 1.25 },
      { note: "E5", duration: "8n", timing: 1.75 },
      { note: "G5", duration: "4n", timing: 1.75 },
      { note: "F#5", duration: "4n", timing: 2.25 },
    ],
  },
];

const genres = [
  { id: "0", genreName: "Rock" },
  { id: "1", genreName: "Classic" },
];

//Your endpoints go here
app.get('/tunes', (req, res) => {
  res.status(200).json({'message': "Get all tunes"});
})

app.get('/tunes/:genreId', (req, res) => {
  res.status(200).json({'message': "Get tune with id " + req.params.tuneId});
})

app.post('/tunes', (req, res) => {
  res.status(200).json({'message': "Post a new tune"});
})

app.put('/tunes/:genreId', (req, res) => {
  res.status(200).json({'message': "Update tune with id " + req.params.tuneId});
})

app.patch('/tunes/:genreId', (req, res) => {
  res.status(200).json({'message': "Partially update tune with id " + req.params.tuneId});
})

app.delete('/tunes', (req, res) => {
  res.status(200).json({'message': "Delete all tunes"});
})

app.delete('/tunes/:genreId', (req, res) => {
  res.status(200).json({'message': "Delete tune with id " + req.params.tuneId});
})

app.use('*', (req, res, next) => {
    res.status(405).send('Operation not supported');
})

//Note endpoints

app.get('/tunes/:genreId/notes', (req, res) => {
  res.status(200).json({'message': "Get all notes for tune with id " + req.params.tuneId});
})

app.get('/tunes/:genreId/notes/:noteId', (req, res) => {
  res.status(200).json({'message': "Get note with id for tune with id " + req.params.tuneId});
})

//Start the server
app.listen(port, () => {
  console.log("Tune app listening on port: " + port);
});
