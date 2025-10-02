import mongoose from "mongoose"

const noteScehma=new mongoose.Schema({
    title:{
        type:String,
        requrired:true,
    },
    content:{
        type:String,
        required:true,
    }
},
{timestamps:true}
)

const Note=mongoose.model("Note",noteScehma)
export default Note;