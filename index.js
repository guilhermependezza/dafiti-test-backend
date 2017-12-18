const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

require('./routes/user')(app)

app.listen(3000, () => console.log('App running in port 3000'))

