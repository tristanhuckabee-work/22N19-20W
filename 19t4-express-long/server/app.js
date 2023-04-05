// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// 0
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists/latest/albums', (req, res) => {     // 4
  res.status(200);
  res.send(getAlbumsForLatestArtist());
});
app.get('/artists/latest', (req, res) => {            // 3
  res.status(200);
  res.send(getLatestArtist());
});
app.get('/artists/:artistId/albums', (req, res) => {  // 8
  const id = req.params.artistId;
  
  res.status(200);
  res.send(getAlbumsByArtistId(id));
});
app.post('/artists/:artistId/albums', (req, res) => { // 10
  const id = req.params.artistId;

  res.status(201);
  res.send(addAlbumByArtistId(id, req.body));
});
app.get('/artists/:artistId/songs', (req, res) => {   // 16
  const id = req.params.artistId;

  res.status(200);
  res.send(getSongsByArtistId(id));
})
app.get('/artists/:artistId', (req, res) => {         // 5
  const id = req.params.artistId;
  
  res.status(200);
  res.send(getArtistByArtistId(id));
});
app.put('/artists/:artistId', (req, res) => {         // 6
  const id = req.params.artistId;

  res.status(200);
  res.send(editArtistByArtistId(id, req.body));
});
app.patch('/artists/:artistId', (req, res) => {
  const id = req.params.artistId;

  res.status(200);
  res.send(editArtistByArtistId(id, req.body));
});
app.delete('/artists/:artistId', (req, res) => {      // 7
  const id = req.params.artistId;

  res.status(200);
  deleteArtistByArtistId(id)
  res.json({
    message: "Successfully deleted"
  });
});
app.get('/artists', (req, res) => {                   // 1
  res.status(200);
  res.send(getAllArtists());
});
app.post('/artists', (req, res) => {                  // 2
  let newArtist = addArtist(req.body);
  res.status(201);
  res.send(newArtist);
})
app.get('/albums/:albumId/songs', (req, res) => {     // 17
  const id = req.params.albumId;

  res.status(200);
  res.send(getSongsByAlbumId(id));
});
app.post('/albums/:albumid/songs', (req, res) => {    // 15
  const id = req.params.albumid;

  res.status(201);
  res.send(addSongByAlbumId(id, req.body));
});
app.get('/albums/:albumId', (req, res) => {           // 9
  const id = req.params.albumId;

  res.status(200);
  res.send(getAlbumByAlbumId(id));
})
app.put('/albums/:albumId', (req, res) => {           // 11
  const id = req.params.albumId;

  res.status(200);
  res.send(editAlbumByAlbumId(id, req.body));
});
app.patch('/albums/:albumId', (req, res) => {
  const id = req.params.albumId;

  res.status(200);
  res.send(editAlbumByAlbumId(id, req.body));
});
app.delete('/albums/:albumId', (req, res) => {        // 12
  const id = req.params.albumId;

  res.status(200);
  deleteAlbumByAlbumId(id);
  res.json({
    message: "Successfully deleted"
  });
});
app.get('/albums', (req, res) => {                    // 13
  let firstLetter = req.query.startsWith;
  if (firstLetter) {
    res.status(200);
    res.send(getFilteredAlbums(firstLetter));
  };
});
app.get('/songs/:songId', (req, res) => {             // 14
  const id = req.params.songId;

  res.status(200);
  res.send(getSongBySongId(id));
});
app.put('/songs/:songId', (req, res) => {             // 18
  const id = req.params.songId;

  res.status(200);
  res.send(editSongBySongId(id, req.body));
});
app.patch('/songs/:songId', (req, res) => {
  const id = req.params.songId;

  res.status(200);
  res.send(editSongBySongId(id, req.body));
});
app.delete('/songs/:songId', (req, res) => {          // 19
  const id = req.params.songId;

  res.status(200);
  deleteSongBySongId(id);
  res.json({
    message: "Successfully deleted"
  });
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}