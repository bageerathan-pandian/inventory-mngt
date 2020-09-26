const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  tax_code: { type: String },
  tax_name: { type: String },
  tax_value_cgst: { type: Number },
  tax_value_sgst: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('tax_details', TaxSchema);