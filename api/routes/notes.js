const { Router } = require('express');

const { Note } = require('../models');
const { Bounce } = require('../middleware');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.query().orderBy('id', 'DESC');

    res.status(200).json({
      status: 'success',
      message: 'All Notes.',
      data: {
        notes,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const note = await Note.query().insert({
      title: req.body.title,
      content: req.body.content,
    });

    res.status(201).json({
      status: 'success',
      message: 'Note Created.',
      data: {
        note,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await Note.query().findById(req.params.id);

    if (!note) {
      throw new Bounce(404, 'Not Found!');
    }

    res.status(200).json({
      status: 'success',
      message: 'Note.',
      data: {
        note,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const note = await Note.query().findById(req.params.id).patch({
      title: req.body.title,
      content: req.body.content,
    });

    if (!note) {
      throw new Bounce(404, 'Not Found!');
    }

    res.status(200).json({
      status: 'success',
      message: 'Note Updated.',
      data: {
        note,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const note = await Note.query().deleteById(req.params.id);

    if (!note) {
      throw new Bounce(404, 'Not Found!');
    }

    res.status(200).json({
      status: 'success',
      message: 'Note Deleted.',
      data: null,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
