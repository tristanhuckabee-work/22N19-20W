const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use('/static', express.static('assets'));
app.use('/', (req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method}${req.url} : ${res.statusCode}`);
  });
  next();
});

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  let error = new Error("Hello World!");
  error.statusCode = 200;
  throw error;
});

app.use((req, res, next) => {
  let error = new Error('Resource Not Found');
  error.statusCode = 404;
  next(error);
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 404);
  res.send(`Error: ${err.message}`);
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));