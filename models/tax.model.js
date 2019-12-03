const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  tax_name: { type: String },
  tax_value: { type: String },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('tax_details', TaxSchema);