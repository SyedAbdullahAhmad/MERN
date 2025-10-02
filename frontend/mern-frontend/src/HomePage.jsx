import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./index.css"
import _ from "lodash"
const HomePage = ({notes,setNotes}) => {

    useEffect(()=>{
        const fetchNotes= async()=>{
            try {
                const res= await axios.get("http://localhost:5000/api/notes")
                console.log(res.data)
                setNotes(res.data)
                console.log(notes)
            } catch (error) {
                console.error("Getting error in fetching notes")
            }
        };
        fetchNotes()
    },[])
    const handleDelete=(id)=>{
       setNotes((prev)=>_.filter(prev,(note)=>note._id!==id))
       const res= axios.delete("http://localhost:5000/api/notes/:id")
       
    }
  return (
    <div>
     <nav className='Navbar'>
        <h1>Notes</h1>
        <Link to={"/createPage"}>
        <button className='Navbtn'>New Note</button>
        </Link>
     </nav>
     <div className='allNotes'>
            {
            notes.length>0 ? (
              notes.map((note)=>(
                <div className='allnotesinnerDiv' key={note._id}>
                <h1>{note.title}</h1> <p>{note.content}</p>
                <FontAwesomeIcon icon={faTrash} className='deleteIcon' onClick={()=>handleDelete(note._id) } />
                 <FontAwesomeIcon className='editIcon' icon={faPenToSquare}/>
                </div>
              ))
            ):<p>There is no note yet</p> }
     </div>
    </div>
  )
}

export default HomePage
