const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
    clienId:String,
    title:{
        type:String,
    required:[true,'Job Title required']},

    desciption:{
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