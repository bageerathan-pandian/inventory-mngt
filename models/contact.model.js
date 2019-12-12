const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  comments: { type: String },
  },{timestamps: true});


module.exports = mongoose.model('contact_details', ContactSchema);