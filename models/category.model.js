const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
    company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
    category_code: { type: String },
    category_name: { type: String },
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('category_details', CategorySchema);