import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    productImage:{type:String, required:true
},
price:{
    type:Number,
    required:true
},
stock:{
    default:0,
    type:Number
},
category:{
    type:mongoose.Schema.Types.ObjectId,
//   require:true,
  ref:"Category"
},
owner:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"User"
}

},{timestamps:true});
export const Product= mongoose.model('Product',productSchema)