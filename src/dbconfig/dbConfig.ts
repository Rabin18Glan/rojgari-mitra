import mongoose from "mongoose";


export async function connect(){
    try {
       await mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Database connection established!");


        })


        connection.on('error',()=>{
            console.log("Database connection error");
            process.exit();
        })
    } catch (error) {
        
    }
}



// methods to sure that the it has data in typescript
// 1.using if else 
//2.using !