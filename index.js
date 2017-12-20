const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    next();
});

app.use(bodyParser.json());

require('./routes/user')(app)
require('./routes/address-list')(app)
require('./routes/product-related-routes')(app)

app.listen(3000, () => console.log('App running in port 3000'))

