import express from 'express';


const app  = express();

app.get("/api/notes",(req,res) => (
    res.send("This is a sample response from the server!")
))

app.listen(5001, () => {
    console.log('Server is running on PORT:5001');
})