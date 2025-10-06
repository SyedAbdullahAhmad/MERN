import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const EditPage = ({notes,setNotes,editId,setEditId}) => {

    const[updatedNote,setUpdatedNote]=useState({
        title:"",
        content:""
    })

    const noteToEdit=notes.find((note)=>note._id===editId)
    const handleTitleChange=(e)=>{
         e.preventDefault();
      setUpdatedNote((prev)=>({...prev,title:e.target.value}))
    }
    const handleContentChange=(e)=>{
         e.preventDefault();
      setUpdatedNote((prev)=>({...prev,content:e.target.value}))
    }
    const handleUpdate= async()=>{
        const res=await axios.put(`http://localhost:5000/api/notes/${editId}`,updatedNote)
     setNotes(prevNotes=>prevNotes.map(notes=>note._id===editId)?{...note,...updatedNote}:null)
     setEditId(null)
    }


  return (
    <>
    <div className='editMainDiv'>
    <div className='editPage'>
      <h1>Your Current Note</h1>
      <h1>{noteToEdit.title}</h1>
      <p>{noteToEdit.content}</p>
    </div>
    <div className='updateDiv'>
        <h1>Edit Box</h1>
        <label>Title</label><input onChange={handleTitleChange} placeholder='Enter title...'/>
        <label>Content</label><input onChange={handleContentChange} placeholder='Enter content ...'/>
        <FontAwesomeIcon onClick={handleUpdate} icon={faSquareCheck} />
    </div>
    </div>
    </>
  )
}

export default EditPage
