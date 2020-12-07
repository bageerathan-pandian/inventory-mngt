const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new mongoose.Schema({
    company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
    brand_code: { type: String },
    brand_name: { type: String },
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('brand_details', brandSchema);