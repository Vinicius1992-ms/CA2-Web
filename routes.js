var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:id', itemCtrl.getItem);
router.delete('/items/:id', itemCtrl.deleteItem);
router.put('/items/:id', itemCtrl.updateItem);

module.exports = router;

// var router = express();

// var express = require('express'),
// router = express.Router();

// router.use(express.static(path.resolve(__dirname, 'views')));
// router.use(express.urlencoded({extended: true}));
// router.use(express.json());
// router.use(expAutoSan.all);