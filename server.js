var express = require('express');
var path = require('path');
var multer  = require('multer');
var storage = multer.memoryStorage();

var upload = multer({ storage: storage }); ///dest: path.join(__dirname, '/uploads')});
 
 var app = express();
 
 app.get('/',function(req,res){
     res.sendFile(path.join(__dirname+ '/index.html'));
 });
 
 app.post('/uploaded', upload.single('fileupload'), function (req, res) {
  console.log(req.file.size);
  var result = {size: req.file.size};
  res.json(result);
  
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
});
 
 
 app.listen(process.env.PORT|| 8080, function(){
    console.log('port is 8080!');
});