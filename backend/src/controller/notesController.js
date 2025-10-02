import Note from "../../models/Note.js"

export async function getAllNodes(req,res){
     try {
           const notes=await Note.find()
     res.status(200).json(notes)
     //  res.status(200).send("You got 5 notes")
     } catch (error) {
          console.error("Getting error in Notes",error)
          res.status(500).json({messaeg:"Internal server error"})
     }
    
}

export async function createAnode(req,res){
     try {
          const{title,content}=req.body
          const newNote=new Note({title,content})

          await newNote.save();
          res.status(201).json({messaeg:"Post  created successfully"})
     } catch (error) {
          console.error("Error in creating new Note",error)
          res.status(500).json({messaeg:"Internal server error"})
     }
    
}
export async function updateAnode(req,res){
     try {
          const{title,content}=req.body
          const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
          res.status(200).json({message:"Note updated successfully"})
          
          if(!updatedNote) return res.status(404).json({message:"Note not found"})
          }
      catch (error) {
          console.error("Error in updation of Note")
          res.send(500).json({message:"Internal server error"})
     }
     // res.status(201).json({messaeg:"Post updated successfully"})
}

export async function deleteAnode(req,res){
     try {
          await Note.findOneAndDelete(req.params.id)
     } catch (error) {
          console.error("Error in dletion of Note")
          res.status(500).json({message:"Internal server error"});
     }
//     res.status(200).json({messaeg:"Post is dedleted"})
}