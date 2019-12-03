const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new mongoose.Schema({
    company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
    supplier_code: { type: String },
    supplier_name: { type: String },
    supplier_address: { type: String },
    phone: { type: String },
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('supplier_details', SupplierSchema);