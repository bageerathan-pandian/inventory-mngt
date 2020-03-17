
// const CategoryModel = require('../models/category.model');
/**
 * get users list
 */
// exports.getAllUsers =  (req, res)=> {
//   CategoryModel.find({},(e,result) => {
//     if(e) {        
//       console.log(e.message);
//         return res.status(500).json(e);
//     } else {
//         return res.json(result);
//     }
// }).sort( { updatedAt: -1 } )
// }

const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
 
let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: 'tcp://192.168.2.29'
});
 
printer.alignCenter();
printer.println("Hello world");
// await printer.printImage('./assets/olaii-logo-black.png')
printer.cut();
 
try {
  let execute = printer.execute()
  console.error("Print done!");
} catch (error) {
  console.log("Print failed:", error);
}

