const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    jobId:string,
    freelancerId:string,
    method:string,
    amount:number,
    paymentDate:Date
})