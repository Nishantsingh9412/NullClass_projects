import React from 'react'
import { Link , useLocation  } from 'react-router-dom';

import './HomeMainbar.css';
import QuestionsList from './QuestionsList';

const HomeMainbar = () => {
    
  var questionsList = [{
    id: 1,
    votes:3,
    noOfAnswers: 2,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1",

  },{
    id: 2,
    votes:0,
    noOfAnswers: 2,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1"
  },{ 
    id: 3,
    votes:1,
    noOfAnswers: 0,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    askedOn: "jan 1"
  }]

  const location = useLocation() ;

  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
              location.pathname === '/' ? <h1> Top Question </h1> : <h1> All Questions </h1>
            }
            <Link to='/AskQuestion' className='ask-btn'>  Ask Questions </Link>
        </div>
        <div>
          {
            questionsList === null ? 
            <h1> Loading .... </h1> : 
            <>
                <p> { questionsList.length } questions </p>
                <p>{ questionsList.questionTitle }</p>
                    {
                     <QuestionsList questionList = {questionsList} />
                    }
                <p> Hello Motto </p>
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar
