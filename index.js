const express        = require("express");
const bodyParser = require('body-parser');
const showdown   = require('showdown');
const cors = require("cors");    
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
let corsOption={
    origin:'*'
  }
  app.use(cors(corsOption));

converter = new showdown.Converter();

app.get('/', function(req, res){
    res.send('Hello Vikash!');
});

app.post("/markdownToHTML", function(req, res) {
    
        text = req.body.text;
        html = converter.makeHtml(text);
        res.json(html);
  
});
 
app.listen(5000, function() {
 console.log("Server running on port 5000");
});

