const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  company_details_id: { type: Schema.Types.ObjectId, ref: 'company_details' },
  customer_code: { type: String },
  customer_name: { type: String },
  customer_address: { type: String },
  phone: { type: String },
  enable_tax: { type: Boolean },
  customer_gstin: { type: String },
  route_name: { type: String },
  status: { type: Number },
}, { timestamps: true });


module.exports = mongoose.model('customer_details', CustomerSchema);