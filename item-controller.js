var Item = require('./models/item.js')

exports.createItem = function(req, res) { 
   
    var newitem = new Item(req.body);
    newitem.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(item); 
});
};

exports.getItems = function(req, res) {
  Item.find({}, function (err, item) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(item);
  }); 
};

exports.getItem = function(req, res) {
  Item.findOne({_id: req.params.id}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};