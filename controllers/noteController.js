const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
};

exports.createNote = async (req, res) => {
    const newNote = new Note({ ...req.body, userId: req.user.id });
    await newNote.save();
    res.status(201).json(newNote);
};

exports.updateNote = async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNote);
};

exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).send();
};