require('dotenv').config();
const express = require('express')
const cors = require('cors')
const connection=require('./db')
const app=express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//db
connection()

//middleware
app.use(express.json())
app.use(cors());

//routes
app.use("/api/register",userRoutes);
app.use("/api/login",authRoutes);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})