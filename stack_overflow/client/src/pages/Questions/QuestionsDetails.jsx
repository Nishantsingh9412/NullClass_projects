import React from 'react'
import { useParams , Link   } from 'react-router-dom'

import  upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { useSelector } from 'react-redux';

const QuestionsDetails = () => {

    const {id}  = useParams();
    console.log(`This is id : ${id}`);
    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList.data[0]._id);
//   var questionsList = [{
//     _id:'1',
//     votes:3,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?" ,
//     questionBody: "It meant to be",
//     questionTags: ["java", "node js", "react js", "mongodb"],
//     userPosted:"mano",
//     askedOn: "jan 1",
//     answer:[{
//         answerBody: "Answer" ,
//         userAnswered: 'kumar',
//         answeredOn: "jan 2",
//         userld: 2,
//     }]

//   },{
//     _id:'2',
//     votes:0,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?" ,
//     questionBody: "It meant to be",
//     questionTags: ["java", "node js", "react js", "mongodb"],
//     userPosted:"mano",
//     askedOn: "jan 1",
//     answer:[{
//         answerBody: "Answer" ,
//         userAnswered: 'kumar',
//         answeredOn: "jan 2",
//         userld: 2,
//     }]
//   },{ 
//     _id:'3',
//     votes:1,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers: 0,
//     questionTitle: "What is a function?" ,
//     questionBody: "It meant to be",
//     questionTags: ["java", "node js", "react js", "mongodb"],
//     userPosted:"mano",
//     askedOn: "jan 1",
//     answer:[{
//         answerBody: "Answer" ,
//         userAnswered: 'kumar',
//         answeredOn: "jan 2",
//         userld: 2,
//     }]
//   }]


  return (
    <div className='question-details-page'>
        {
            questionsList.data === null ?
            <h1> Loading ... </h1> :
            <>
                {
                    questionsList.data.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                     <div className="question-votes">
                                        <img src={upvote} alt=""  width={18} className='votes-icon'/>
                                        <p>{question.upVotes - question.downVotes}  </p>
                                        <img src={downvote} alt="" width={18}/>
                                     </div> 
                                     <div style={{width: "100%" }}>
                                        <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}> {tag} </p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='share'> Share </button>
                                                    <button type='share'> Delete </button>

                                                </div>

                                                <div>
                                                    <p> asked {question.askedOn}</p>
                                                    <Link to={`/User/${question._id}`} className='user-link' style={{color:'#0086d8'}}>
                                                            <Avatar backgroundColor='orange'  px='8px' py='12px' > {question.userPosted.charAt(0).toUpperCase()}</Avatar> 
                                                            <div>
                                                                {
                                                                    question.userPosted
                                                                }
                                                            </div>
                                                    </Link> 
                                                </div>
                                            </div>
                                     </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers </h3>
                                        <DisplayAnswer key={question._id} question={question}/> 
                                    </section>
                                )
                            }

                            <section className='post-ans-container'>
                                <h3> Your Answers </h3>                                
                                <form>
                                    <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                    <input type="submit" className='post-ans-btn' value='Post your Answer' />
                                </form>
                                <p>
                                    Browse other Question Tagged
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or 
                                    <Link to='/AskQuestion'  style={{textDecoration:"none",color:"#009dff"}}> Ask Your Own Question . </Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionsDetails
