

const nodeCron = require("node-cron");
const moment = require('moment')

const UserModel = require('../models/user.model');
const ProductPaymentModel = require('../models/product_payment.model');


// var task1 = nodeCron.schedule("* * * * *", () => {
//       console.log("running a task every min");
    //   ProductPaymentModel.find({"expiry_date": {"$lt": new Date()}}, (err, result) => {
    //     if (err) return next(err);
    //     return result
    //   });
  // });

// var task2 = nodeCron.schedule("0 * * * *", () => {
//         console.log("running a task every hour");
//     });

    // do expired account. it runs every day
var task3 = nodeCron.schedule("* * * * *", () => {
    console.log("will run every day at 12:00 AM");
    ProductPaymentModel.find({expiry_date:  {$lte: moment().format(), $ne: null }}, (err, result) => {
        if (err) return next(err);
        // console.log(result);
        console.log('length',result.length);
        // return result
        for(let data of result){            
            let updata = {status: 2}
            // console.log(data.company_details_id);
            UserModel.find({company_details_id:data.company_details_id},(err, result1) => {
                if (err) return next(err);
                console.log('userdata',result1);                
                for(let data1 of result1){  
                    if(data1.role != 0){
                        UserModel.update({company_details_id:data.company_details_id}, updata,{new: true}, (err, result2) => {
                            if (err) return next(err);
                            console.log(result2);
                        });
                    }
                }
            });
        }
    
})
  });

  
// stops the cron job
// task.stop();
  
// stops and destroys the cron job
// task.destroy();

// wont start the cron job as it has been destroyed
// task.start();
