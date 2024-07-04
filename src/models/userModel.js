const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true },
  email: { 
    type: String,
     unique: true, 
     required: true },
  password: { 
    type: String,
     required: true },
  role: { type: String,
     enum: ['freelancer', 'employer'],
      required: true },
  created_at: { type: Date, 
    default: Date.now },
  updated_at: { type: Date,
     default: Date.now },
  isVerified: { type: Boolean,
     default: false },
  isAdmin: { type: Boolean, 
    default: false },
  lastLoggedIn: { type: Date },
  forgotPasswordToken: { type: String },
  forgotPasswordTokenExpiry: { type: Date },
  verifyToken: { type: String },
  verifyTokenExpiry: { type: Date },
});

const User =mongoose.models.users|| mongoose.model('users', userSchema);


export default User;