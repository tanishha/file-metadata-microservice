var express = require('express');
var cors = require('cors');
const morgan = require('morgan')

require('dotenv').config()

var app = express();

//load third-party middleware
app.use(morgan('dev'))

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const route=require("./routes")
app.use('/api', route)


const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('App is listening on port ' + port)
});