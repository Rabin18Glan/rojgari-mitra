const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
   emplyer_id:mongoose.Schema.ObjectId,
    title:{
        type:String,
    required:[true,'Job Title required']},

    description:{
        type:String,
        required:[true,'Job Description required']
    },
    budget:{
type:String,
required:[true,'Job Budget required']
    },
    postedDate:Date,
    deadline:Date,
    salaryType:{
         type:String,
        default:'fixed'
    }
       
    
  
});


const Job =mongoose.models.jobs|| mongoose.model('jobs',jobSchema);


export default Job;