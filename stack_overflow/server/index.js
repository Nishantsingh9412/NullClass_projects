// const express = require('express');    // if using commonjs in package.json
import express  from "express";     //  if using  type:module in package.json
import mongoose, { mongo } from "mongoose";
import cors from 'cors';

import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js'



const app = express();
app.use(express.json({limit:"30mb", extended : true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());


app.get('/' , (req,res) => {
    res.send("This is a stack overflow clone api ");
})

app.use('/user', userRoutes )
app.use('/questions', questionRoutes)
app.use('/answer',answerRoutes)


const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://nishantsingh9412ns:NqHsogMt1YgXErRB@cluster0.nfsahu8.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
.then(
        () => app.listen(PORT , 
            () => {console.log(`server running on port ${PORT}`)})
    )
.catch(
    (err) => console.log(err)
);