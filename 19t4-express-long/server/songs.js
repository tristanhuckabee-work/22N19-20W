const express = require('express');
const router = express.Router();

app.get('/:songId', (req, res) => {
  const id = req.params.songId;

  res.status(200);
  res.send(getSongBySongId(id));
});
app.put('/:songId', (req, res) => {
  const id = req.params.songId;

  res.status(200);
  res.send(editSongBySongId(id, req.body));
});
app.patch('/:songId', (req, res) => {
  const id = req.params.songId;

  res.status(200);
  res.send(editSongBySongId(id, req.body));
});

module.exports = router;