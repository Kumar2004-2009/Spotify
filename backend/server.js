import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;


// middleware
app.use(cors());
app.use(express.json());

// initialize routes
app.use("/api/song",songRouter)

app.get('/',(req,res)=> res.send("API Working"))

app.listen(port,()=>console.log(`Server running on port ${port}`));