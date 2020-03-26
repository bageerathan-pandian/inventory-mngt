const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductPaymentSchema = new mongoose.Schema({
    plan_type: { type: Number }, // 0-free,1-premium
    payment_amount: { type: String },
    currency: { type: String },
    payment_details:{type:Object},
    expiry_date:{type:Date},
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('product_payment_details', ProductPaymentSchema);