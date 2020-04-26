var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    Select: { 
        type: String,
        enum: ['HOT BEVERAGE', 'COLD BEVERAGE', 'FOOD']
    },
    item: { type: String, unique: true, lowercase: true},
    price: Number,
    
});

module.exports = mongoose.model('item', itemSchema);