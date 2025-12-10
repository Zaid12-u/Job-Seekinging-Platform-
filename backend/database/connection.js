import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"JOB_PORTAL"

    }).then(()=>{
        console.log('connect to database ')
    }).catch(err=>{
        console.log(`get error while connecting to database:${err} `)
    })
}