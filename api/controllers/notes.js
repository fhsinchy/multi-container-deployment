const { Note } = require('../models');
const { Bounce } = require('../middleware');

async function index(req, res, next) {
  try {
    const notes = await Note.query();

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
}

async function store(req, res, next) {
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
}

async function show(req, res, next) {
  try {
    const note = await Note.query().findById(req.params.id);

    if (!note) {
      throw new Bounce(404, 'Not Found!');
    }

    res.status(200).json({
      status: 'success',
      message: 'Single Note.',
      data: {
        note,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
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
}

async function destroy(req, res, next) {
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
}

module.exports = { index, store, show, update, destroy };
