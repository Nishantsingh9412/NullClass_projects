// const express = require('express');    // if using commonjs in package.json
import express from "express";     //  if using  type:module in package.json
import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js'




const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


// app.get('/' , (req,res) => {
//     res.send("This is a stack overflow clone api ");
// })

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)



// ----------------------------deployment--------------------------------------

const __dirname = path.resolve();
// console.log(__dirname)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(("./frontend/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "./frontend", "build", "index.html"));
    });

} else {
    app.get('/', (req, res) => {
        res.send("Welcome to NullClass API's ")
    })
}
// ----------------------------deployment--------------------------------------


const PORT = process.env.PORT || 9000
const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => app.listen(PORT,
            () => { console.log(`server running on port ${PORT}`) })
    )
    .catch(
        (err) => console.log(err)
    );