const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new mongoose.Schema({
    company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
    plan_details_id:  { type: Schema.Types.ObjectId, ref: 'plan_details' },
    payment_amount: { type: String },
    currency: { type: String },
    payment_details: { type: Object },
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('payment_details', PaymentSchema);