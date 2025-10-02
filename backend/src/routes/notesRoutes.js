import express from "express"
import { createAnode, deleteAnode, getAllNodes, updateAnode } from "../controller/notesController.js";

const router=express.Router();

router.get("/",getAllNodes)
router.post("/",createAnode)
router.put("/:id",updateAnode)
router.delete("/:id",deleteAnode)

export default router;


// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("You got 5 notes")
// })
// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({messaeg:"Post created successfully"})
// })

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(201).json({messaeg:"Post updated successfully"})
// })

// app.delete("/api/notes",(req,res)=>{
//     res.status(200).json({messaeg:"Post is dedleted"})
// })