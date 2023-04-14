const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json("GET /colors");
});

router.get('/:name', (req, res) => {
  let name = req.params.name;
  console.log(req.query.user, req.query.age);

  res.json(`GET /colors/${name}`);
});
module.exports = router;