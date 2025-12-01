const mongoose = require('mongoose')

const vocabSchema = new mongoose.Schema({
    english: {
        type: String,
        required: [ true, 'english word is required' ],
        minlength: [ 1, 'english word at least 3 characters' ],
        maxlength: [ 50, 'english word at most 50 characters' ],
        unique: true
    },
    chinese: {
        type: String,
        required: [ true, 'chinese word is required' ],
        minlength: [ 1, 'chinese word must be at least 3 characters' ],
        maxlength: [ 50, 'chinese word must be at most 50 characters' ],
        unique: true
    },
    pinyin: {
        type: String,
        required: [ true, 'pinyin word is required' ],
        minlength: [ 1, 'pinyin word must be at least 3 characters' ],
        maxlength: [ 50, 'pinyin word must be at most 50 characters' ],
        unique: true
    },
    vietnamese: {
        type: String,
        required: [ true, 'vietnamese word is required' ],
        minlength: [ 1, 'vietnamese word must be at least 3 characters' ],
        maxlength: [ 50, 'vietnamese word must be at most 50 characters' ],
        unique: true
    },
    dateTime:{
        type: Date,
        default: Date.now
    }
})

const vocabModel = mongoose.model('vocabs', vocabSchema)
module.exports = vocabModel
