import mongoose from 'mongoose'

const SubTodoSchema= new mongoose.Schema({},{timestamps:true})
export const  SubTodo= mongoose.model('SubTodo',SubTodoSchema)