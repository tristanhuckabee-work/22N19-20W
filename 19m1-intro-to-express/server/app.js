const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.send('The server is alive!');
});

const port = 5000;
<<<<<<< HEAD
app.listen(port, () => console.log(`Listening on port ${port}`));
=======
app.listen(port, () => console.log(`Server is listening on port ${port}`));
>>>>>>> main
