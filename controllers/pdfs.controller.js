//Required package
var pdf = require("pdf-creator-node");
var fs = require('fs');
var path = require('path');
var __parentDir =require('path').resolve(__dirname, '..');
 
// Read HTML Template
// path.join(__dirname, "client/dist/client/index.html")
// console.log('__dirname',__parentDir)

var html = fs.readFileSync(__parentDir +'/public/pdf-templates/template/test.html', 'utf8');

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

exports.getAllUsers =  (req,res)=>{
    console.log('pdf',req);
    var users = [
        {
            name:"Shyam",
            age:"26"
        },
        {
            name:"Navjot",
            age:"26"
        },
        {
            name:"Vitthal",
            age:"26"
        }
    ]
    var document = {
        html: html,
        data: {
            users: users
        },
        path: __parentDir +'/public/pdf-templates/output/output5.pdf'
    };
    pdf.create(document, options)
    .then(result => {
        console.log(result)
        // return res.json(result.filename) 
        // var res1 = __parentDir.replace(/\\/g, "/");
        var res2 = '/static/pdf-templates/output/output5.pdf'
        return res.json(res2)
    })
    .catch(error => {
        console.error(error)
        return res.json(error)
    });
}
