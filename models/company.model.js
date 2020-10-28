const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const CompanySchema = new mongoose.Schema({
  company_code: { type: String},
  company_name: { type: String, required: true },
  slug: { type: String, slug: 'company_name' , unique: true},
  company_address: { type: String },
  company_image: { type: String },
  owner_name: { type: String },
  country_code: { type: String },
  phone: { type: String },
  phone2: { type: String },
  country_dialCode: { type: String },
  gstin: { type: String },
  product_payment_details_id:  { type: Schema.Types.ObjectId, ref: 'product_payment_details' },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('company_details', CompanySchema);