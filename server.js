// this code tha is a adapted version from Mikhail's github and can be found at: https://github.com/mikhail-cct/CA1-In-class-Demo

// variables 
var logger = require("morgan"),
    cors = require("cors"),
    http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    expAutoSan = require("auto-sanitize"),
    mongoose = require('mongoose');
    require("dotenv").config();

//setting up express 
var router = express();
router.use(express.static('./views'))

//allowing data sent from the client to become part of the URL.
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


//path to the inde.html page
router.get('/', function (req, res) {
    res.render('index');
})

//Setting the port 3000 to the connection.
var port = process.env.PORT || 3000;

router.use(logger('dev'));

// body-parser parsing json into the requests
router.use(bodyParser.json());
router.use(require('./routes'));

router.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});

//connection created to the mongoDB Atlas.
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, { useFindAndModify: false });
mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB is successfully connected');
});