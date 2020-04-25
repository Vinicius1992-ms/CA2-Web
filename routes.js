var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');

module.exports = router;

router.use(express.static(path.resolve(__dirname, 'views')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use(expAutoSan.all);

// module.exports = router;
// router.post('/itens', itemCtrl.createItem);
// router.get('/itens', itemCtrl.getItens);
// router.get('/itens/:id', itemCtrl.getItem);
// router.delete('/itens/:id', itemCtrl.deleteItem);
// router.put('/itens/:id', itemCtrl.updateItem);

// var router = express();

// var express = require('express'),
// router = express.Router();