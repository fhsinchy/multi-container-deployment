const { Router } = require('express');

const notesRoute = require('./notes');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    message: 'Bonjour, mon ami',
  });
});

router.use('/notes', notesRoute);

module.exports = router;
