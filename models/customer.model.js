const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  customer_code: { type: String },
  customer_name: { type: String },
  customer_address: { type: String },
  phone: { type: String },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('customer_details', CustomerSchema);