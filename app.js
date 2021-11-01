const express = require('express');

const route
const app = express();


app.get('/some-point', function(req, res) {
  return res.send('this is the backend response');
});

app.listen(3000, function(){
  console.log('pickfix');
}) 