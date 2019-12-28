//Required package
var pdf = require("pdf-creator-node");
var fs = require('fs');
var __parentDir =require('path').resolve(__dirname, '..');
 
// Read HTML Template
// path.join(__dirname, "client/dist/client/index.html")
// console.log('__dirname',__parentDir)

var html = fs.readFileSync(__parentDir +'/public/templates/invoice-template/invoice-design.html', 'utf8');


var options = {
    format: "A4",
    orientation: "portrait",
    border: "5mm",
    // header: {
    //     height: "45mm",
    //     contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    // },
    // "footer": {
    //     "height": "28mm",
    //     "contents": {
    //     first: 'Cover page',
    //     2: 'Second page', // Any page number is working. 1-based index
    //     default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //     last: 'Last Page'
    // }
    // }
};

exports.getAllUsers =  (req,res)=>{
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
        path: __parentDir +'/public/templates/output/invoice-design-'+Math.random()+'.pdf'
    };
    pdf.create(document, options)
    .then(result => {
        console.log('pdf created:' + result.filename)
        // return res.json(result.filename) 
        // var res1 = __parentDir.replace(/\\/g, "/");
        console.log('filename: ' + result.filename.split('\\').pop())
        var res2 = '/static/templates/output/'+result.filename.split('\\').pop()
        return res.json(res2)
    })
    .catch(error => {
        console.error(error)
        return res.json(error)
    });
}
