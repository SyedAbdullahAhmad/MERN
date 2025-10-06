import React from 'react'
import { useState } from 'react'
import{Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
import CreatePage from './CreatePage'
import EditPage from './EditPage'
const App = () => {
   const [notes,setNotes]=useState([])
   const[editId,setEditId]=useState()

   const handleEditId=(id)=>{
     setEditId(id)
   }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage EditIdtoParent={handleEditId}  notes={notes} setNotes={setNotes}/>}/>
        <Route path="/createPage" element={<CreatePage notes={notes} setNotes={setNotes} />}/>
        <Route path="/editPage" element={<EditPage editId={editId} setEditId={setEditId} notes={notes} setNotes={setNotes}/> }/>
      </Routes>
    </div>
  )
}

export default App
