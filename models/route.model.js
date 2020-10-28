const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new mongoose.Schema({
  company_details_id: { type: Schema.Types.ObjectId, ref: 'company_details' },
  route_code: { type: String },
  route_name: { type: String },
  status: { type: Number },
}, { timestamps: true });


module.exports = mongoose.model('route_details', RouteSchema);