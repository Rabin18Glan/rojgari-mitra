const mongoose = require('mongoose');

const {Schema} = mongoose;

const bidSchema = new Schema({
    bid_id: { type: Schema.Types.ObjectId, auto: true },
    job_id: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    freelancer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  const Bid =mongoose.models.bids|| mongoose.model('bids', bidSchema);


  export default Bid;