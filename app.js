const express = require('express');
const app = express();
require('dotenv').config()
let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
res.send('Hello World');
})

app.get("/index",(req, res) => {
    res.render("index");
});

app.listen(port, function(){
 console.log(`Example app listening on port ${port}!`);
})