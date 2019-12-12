var multer = require('multer');
global.crypto = require ("crypto")
const mime = require ("mime")
const moment = require("moment")
var path = require('path');
// console.log(session)
// set the directory for the uploads to the uploaded to
// var DIR = './client/dist/client/assets/uploads/';
// var DIR = './client/src/assets/uploads/';
var DIR = './public/uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
// var upload = multer({dest: DIR}).single('image');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('sess',req.session);
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + moment() + '.' + mime.getExtension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage }).single('image');
/* GET home page. */

exports.imageUpload =  (req,res)=>{
  // console.log('imag upload',req.body);
  // console.log('sess1',req.session);
    upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
      console.log('req.file.filename:',req.file.filename);
      console.log('req.file.path',req.file.path);
        // path = req.file.path;
        // var revisedString = path.replace('client', '');
        // var revisedString1 = revisedString.replace('src', '');
        // var s2 = revisedString1.substr(1);
        // var res1 = s2.replace(/\\/g, "/");
        // console.log('path',path);
        // console.log('res1',res1);
        // var res1 = __parentDir.replace(/\\/g, "/");
        var res2 = '/static/uploads/'+req.file.filename;
        return res.json(res2)
  });     
}

exports.profileImageUpload =  (req,res)=>{
  console.log('profileImageUpload upload',req.body);
  console.log('sess1',req.session);
    upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
       console.log('req.file.filename:',req.file.filename);
       console.log('req.file.path',req.file.path);
         // path = req.file.path;
         // var revisedString = path.replace('client', '');
         // var revisedString1 = revisedString.replace('src', '');
         // var s2 = revisedString1.substr(1);
         // var res1 = s2.replace(/\\/g, "/");
         // console.log('path',path);
         // console.log('res1',res1);
        //  var res1 = __parentDir.replace(/\\/g, "/");
         var res2 = '/static/uploads/'+req.file.filename;
         return res.json(res2)
  });     
}

exports.logoUpload =  (req,res)=>{
  console.log('logoUpload upload',req.body);
  console.log('sess1',req.session);
    upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        path = req.file.path;
        var revisedString = path.replace('client', '');
        var revisedString1 = revisedString.replace('src', '');
        var s2 = revisedString1.substr(1);
        var res1 = s2.replace(/\\/g, "/");
        // console.log('path',path);
        // console.log('res1',res1);

        return res.json(res1); 
  });     
}
