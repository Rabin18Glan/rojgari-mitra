const paymentSchema = new Schema({
    payment_id: { type: Schema.Types.ObjectId, auto: true },
    job_id: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['eSewa', 'Khalti'], required: true },
    transaction_id: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Payment', paymentSchema);
  