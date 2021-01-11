const http=require('http');
const express=require('express');
const app=express();
const hostname='localhost';
const port=3001;
const  bodyParser = require('body-parser')
const cors=require('cors');
app.use(cors());
var db = require("./config.js");
var mongo = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var schema=mongo.Schema({
    contact:Number,
    email:String
})
var Tryathome=mongo.model('tryathome',schema,'tryathome')
app.post('/tryathome',function(req,res){
        var contact=req.body.contact;
        var email=req.body.email;
   
    var tryathome=new Tryathome({
        contact:contact,
        email:email
    })
    tryathome.save(function(err,data){
        if(err)return console.error(err);
        else{
            res.send({status:1,result:data});
        }
        console.log(tryathome.contact+" "+tryathome.email);
    });
})
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohanardhapure83@gmail.com',
      pass: 'rohan@123'
    }
  });
  app.post('/send', (req, res) => {
    console.log(req.body.email)
    var mailOptions = {
     from: 'rohanardhapure83@gmail.com',
     to: req.body.email,
     subject: 'Sending Email using Node.js',
     html: '<h1>Welcome</h1><h3>That was easy!</h3>'
   };
   
   transporter.sendMail(mailOptions, function(err, data){
     if (err) {
       res.json({
         status: 'fail'
       })
     } else {
       res.json({
        status: 'success'
       })
     }
      
     
   });
 });

 var fs = require('fs');
 var path = require('path');
 require('dotenv/config');
 var imageSchema = new mongo.Schema({
  name: String,
  desc: String,
  img:
  {
      data: Buffer,
      contentType: String
  }
});

//Image is a model which has a schema imageSchema

module.exports = new mongo.model('Image', imageSchema);
app.set("view engine", "ejs");

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
var imgModel = require('./model');

app.get('/', (req, res) => {
  imgModel.find({}, (err, items) => {
      if (err) {
          console.log(err);
      }
      else {
          res.render('app', { items: items });
      }
  });
});

app.post('/images', upload.single('image'), (req, res, next) => {
 
  var obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  imgModel.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
          res.redirect('/');
      }
  });
});
