import express from 'express'
import router from './routes/notesRoutes.js';
import { connectDB } from '../Config/db.js';
import  cors from "cors"
const app=express();

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/api/notes",router)

const PORT=5000

connectDB().then(() => {
    console.log("DB connected successfully")
})

app.listen(5000,()=>{
 console.log(`Server started at PORT ${PORT}`)   
})