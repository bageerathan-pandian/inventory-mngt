const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  category_details_id:  { type: Schema.Types.ObjectId, ref: 'category_details' },
  stock_code: { type: String },
  stock_name: { type: String },
  stock_qty: { type: Number },
  buying_price: { type: Number },
  buying_with_tax: { type: Boolean },
  selling_price: { type: Number },
  mrp: { type: Number },
  product_details: { type: String },
  unit_details_id:  { type: Schema.Types.ObjectId, ref: 'unit_details' },
  tax_details_id:  { type: Schema.Types.ObjectId, ref: 'tax_details' },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('stock_details', StockSchema);