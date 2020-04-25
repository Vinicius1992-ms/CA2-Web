var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    item: { type: String, unique: true, lowercase: true},
    price: Number,
});

module.exports = mongoose.model('Item', itemSchema);