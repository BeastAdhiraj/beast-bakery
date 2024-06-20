import mongoose from "mongoose";

const cdb = handler => async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(process.env.MOURL)
    return handler(req,res);
}

export default cdb