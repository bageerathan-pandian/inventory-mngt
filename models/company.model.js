const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const CompanySchema = new mongoose.Schema({
  company_code: { type: String},
  company_name: { type: String, required: true },
  slug: { type: String, slug: 'company_name' , unique: true},
  company_address: { type: String },
  company_image: { type: String },
  owner_name: { type: String },
  phone: { type: String },
  gstin: { type: String },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('company_details', CompanySchema);