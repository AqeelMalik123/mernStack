import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    }
},{
    timestamps:true,
    versionKey:false,
    toJSON:{
        virtuals:true,
        transform:(doc,ret)=>{
            delete ret.__v
            return ret
        }
    }
 
})
export const User=mongoose.model('User',UserSchema)