'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const http = require("http");


 app.use(bodyParser.json())
// app.get('/', (req, res) =>{
//   res.send('hello');
// });

app.listen(process.env.PORT || 3000, () =>{
  console.log('listening on 3000')
})

app.use('/', express.static(path.join(__dirname, '../public')))


setInterval(function() {
    http.get("http://www.kbarateli.com.herokudns.com");
    http.get("http://www.kbarateli.com");
    http.get("https://tea-cup.herokuapp.com");
    http.get("https://app-mercury.herokuapp.com");
}, 300000);