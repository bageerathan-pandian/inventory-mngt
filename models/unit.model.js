const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  unit_code: { type: String },
  unit_name: { type: String },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('unit_details', UnitSchema);