var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');

router.post('/item', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/item/:id', itemCtrl.getItem);
router.delete('/item/:id', itemCtrl.deleteItem);
router.put('/item/:id', itemCtrl.updateItem);

module.exports = router;

