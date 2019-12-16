const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
    user_code: { type: String },
    user_name: { type: String },
    user_image: { type: String },
    user_email: { type: String },
    user_pwd: { type: String },
    cnfirm_user_pwd: { type: String },
    reset_pwd_token: { type: String },
    reset_pwd_expire: { type: String },
    phone: { type: String },
    role: { type: Number },
    isLoggedIn: { type: Boolean },
    isVerified: { type: Boolean },
    status: { type: Number },
  },{timestamps: true});


module.exports = mongoose.model('user_details', UserSchema);