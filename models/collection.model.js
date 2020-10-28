const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  collection_code: { type: String },
  customer_details_id:  { type: Schema.Types.ObjectId, ref: 'customer_details' },
  total_purchase_amt: { type: Number },
  total_paid_amt: { type: Number },
  total_pending_amt: { type: Number },
  collection_date: { type: Date },
  collection_amt: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('collection_details', CollectionSchema);