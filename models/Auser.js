const mongoose = require('mongoose');

const AuserSchema = new mongoose.Schema({
    name: {type:String , required: true},
    email: {type:String , required: true, unique:true},
    category: {type:String , required: true},
    price: {type:String, required: true },
    auk: {type:String, required: true },
  
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Auser", AuserSchema)