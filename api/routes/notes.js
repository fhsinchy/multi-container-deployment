const { Router } = require('express');
const { index, store, destroy } = require('../controllers/notes');

const router = Router();

router.get('/', index);
router.post('/', store);
router.delete('/:id', destroy);

module.exports = router;
