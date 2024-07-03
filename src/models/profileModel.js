const profileSchema = new Schema({
    profile_id: { type: Schema.Types.ObjectId, auto: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String },
    skills: { type: [String] },
    profile_picture_url: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Profile', profileSchema);
  