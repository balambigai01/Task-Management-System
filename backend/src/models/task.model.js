import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    priority:
    {
        type: String,
        enum: ['high', 'low', 'medium'],
        default:"low"
    },
    status: {
        type: String,
        enum: ['todo', 'progress', 'done'],
        default:"todo"
    },
  
},
    { timestamps: true })
  
    export const Task = mongoose.model('Task',taskSchema)