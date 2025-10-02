import React, { useState } from 'react'
import "./index.css"
import axios from 'axios'
const CreatePage = ({notes,setNotes}) => {
  const[newNote,setNewNote]=useState({
    title:"",
    content:""
  })
  const handleTitleChaneg=(e)=>{
    e.preventDefault();
      setNewNote((prev)=>({...prev,title:e.target.value}))
  }
   const handleContentChange=(e)=>{
     e.preventDefault();
      setNewNote((prev)=>({...prev,content:e.target.value}))
   }

   const handleAdd=()=>{
     const res=new  axios.post("http://localhost:5000/api/notes",newNote)
      setNotes((notes)=>[...notes,newNote])
     
   }
  return (
    <div className='createNote'>
      <h1>Create New Note</h1>
      <label>Title</label><input type='text' onChange={handleTitleChaneg} placeholder='Enter title of your note here...'/>
      <label>Content</label><input type='text'  onChange={handleContentChange} placeholder='Enter the content here... '/>
      <button className='createNoteaddbtn' onClick={handleAdd} >Add</button>
      <div>{newNote.title}|{newNote.content}</div>
    </div>
  )
}

export default CreatePage
