const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
    name: { type: String, maxLength: 255 },
    age: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Persons', Person);
