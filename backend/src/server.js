import express from 'express';
import notesRouters from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config()
const app  = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes",notesRouters)
connectDB();

app.listen(PORT, () => {
    console.log('Server is running on PORT',PORT);
})
