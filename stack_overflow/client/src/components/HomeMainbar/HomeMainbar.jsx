import React from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom';

import './HomeMainbar.css';
import QuestionsList from './QuestionsList';

const HomeMainbar = () => {

  const location = useLocation() ;
  const user = 1;
  const navigate = useNavigate();

    
  var questionsList = [{
    _id: 1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    userId : 1,
    askedOn: "jan 1",
    answer: [{
      answerBody : "Answer",
      userAnswered : "kumar",
      answeredOn : "Jan 2",
      userId : 2,
    }]
  },{
    _id: 1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    noOfAnswers: 2,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    userId : 2,
    askedOn: "jan 1",
    answer: [{
      answerBody : "Answer",
      userAnswered : "kumar",
      answeredOn : "Jan 2",
      userId : 2,
    }]
  },{ 
    _id: 1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    noOfAnswers: 0,
    questionTitle: "What is a function?" ,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted:"mano",
    userId : 3,

    askedOn: "jan 1",
    answer: [{
      answerBody : "Answer",
      userAnswered : "kumar",
      answeredOn : "Jan 2",
      userId : 1, 
    }]
  }]

  
  // function redirect () {
  //     alert("Login or Signup ");
  //         navigate('/Auth');
  // }

  const checkAuth = () => {
    if(user === null){
      alert("Login or Signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion');
    }
  }
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
              location.pathname === '/' ? <h1> Top Question </h1> : <h1> All Questions </h1>
            }
            <button onClick={checkAuth} className='ask-btn'>  Ask Questions </button>
        </div>
        <div > 
          {
            questionsList === null ? 
            <h1> Loading .... </h1> : 
            <>
                <p> { questionsList.length } questions </p>
                <p>{ questionsList.questionTitle }</p>
                    {
                     <QuestionsList questionList = {questionsList} />
                    }
                {/* <p> Hello Motto </p> */}
            </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar
