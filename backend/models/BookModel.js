const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true 
    },
    publicationDate: {
        type: Date,
        default: Date.now
    }, 
    publisher: {
        type: String
    }, 
    dateModified: {
        type: Date,
        default: Date.now
    }
});

module.exports = BookModel = mongoose.model('book',BookSchema);