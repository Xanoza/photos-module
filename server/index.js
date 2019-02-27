const express = require('express');
const path = require('path');
const cors = require('cors');
const {
  findPhotos,
} = require('../database/index');

const app = express();

const PORT = 8888;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  findPhotos(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Shows the page on load even if the above doesn't exist
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));
