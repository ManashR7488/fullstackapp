const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = 3000 || process.env.PORT

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
// res.send('Hello World');
res.render('index');
})


app.listen(port, function(){
 console.log(`Example app listening on port ${port}!`);
})