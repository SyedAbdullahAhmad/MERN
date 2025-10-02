import React from 'react'
import { useState } from 'react'
import{Routes,Route} from "react-router-dom"
import HomePage from './HomePage'
import CreatePage from './CreatePage'
const App = () => {
   const [notes,setNotes]=useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage notes={notes} setNotes={setNotes}/>}/>
        <Route path="/createPage" element={<CreatePage notes={notes} setNotes={setNotes} />}/>
      </Routes>
    </div>
  )
}

export default App
