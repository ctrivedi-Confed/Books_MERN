const express = require('express');
const bookRouter = express.Router();

// Model of Book
const BookModel = require('../../models/BookModel');

// Fetch All Books
bookRouter.get('/', (req,res)=>{
    BookModel.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json({noBookFound: 'No Book Found in DB', error: err}));
});

// Fetch Book by id
bookRouter.get('/:id', (req,res)=>{
    BookModel.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json({noBookFound: 'No Book Found in DB', error: err}));
});

// Post Book
bookRouter.post('/', (req,res)=>{
    BookModel.create(req.body)
        .then(book => res.json({msg: 'Book has been added!'}))
        .catch(err => res.status(400).json({error: 'Error on adding Book', error: err}));
});

//Put Book
bookRouter.put('/:id', (req,res)=>{
    BookModel.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Book has been updated!'}))
        .catch(err => res.status(400).json({error: 'Error on updating Book', error: err}));
});

//Put Book
bookRouter.delete('/:id', (req,res)=>{
    BookModel.findByIdAndDelete(req.params.id)
        .then(book => res.json({msg: 'Book has been deleted!'}))
        .catch(err => res.status(400).json({error: 'Error on deleting Book', error: err}));
});

module.exports = bookRouter;