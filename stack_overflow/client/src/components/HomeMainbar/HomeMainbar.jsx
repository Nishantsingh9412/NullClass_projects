import React from 'react'
import { Link , useLocation  } from 'react-router-dom';

import './HomeMainbar.css';

const HomeMainbar = () => {
    
  var questionsList = [{
    id: 1,
    votes:3,
    noOfAnswers: 2,
    questionTitte: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1",

  },{
    id: 2,
    votes:0,
    noOfAnswers: 2,
    questionTitte: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1"
  },{ 
    id: 3,
    votes:1,
    noOfAnswers: 0,
    questionTitte: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1"
  }]

  const location = useLocation()

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
              // location.pathname === '/' ? <h1></h1>
            }
        </div>
    </div>
  )
}

export default HomeMainbar
