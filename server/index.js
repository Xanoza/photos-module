require('newrelic');

const express = require('express');
const path = require('path');
const cors = require('cors');
const {
  findPhotos,
} = require('../database');

const app = express();

const PORT = 8888;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Get photos for specific restaurant
app.get('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  findPhotos(id, (err, photos) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(photos.rows);
  });

});

// Add photo for specific restaurant
// app.post('/api/photos/:id', photos.add);

// Update photos
// app.put('/api/photos/:id/:photoId', photos.update);

// Delete photo
// app.delete('/api/photos/:id/:photoId', photos.delete);

// Shows the page on load even if the above doesn't exist
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));