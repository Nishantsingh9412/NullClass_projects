import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import copy from 'copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { deleteQuestion, postAnswer } from '../../actions/question';



const QuestionsDetails = () => {

    const { id } = useParams();
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

    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation();
    const url = 'http://localhost:3000';
    console.log(location);                    // --> Object // pathname "/Questions/64edf7956827cd3333eea943"

    const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert('login or Signup to answer a question ')
            Navigate('/Auth');
        } else {
            if (Answer === '') {
                alert('Enter an answer before Submitting ')
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
            } 
        }
    }

    const handleShare = () => {
        copy(url + location.pathname);
        alert('Copied Url :' + url + location.pathname)
        console.log("This is Handle Share");
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate))
    }

    return (
        <div className='question-details-page'>
            {
                questionsList?.data === null ?
                    <h1> Loading ... </h1> :
                    <>
                        {
                            questionsList?.data?.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <img src={upvote} alt="" width={18} className='votes-icon' />
                                                <p>{question.upVotes - question.downVotes}  </p>
                                                <img src={downvote} alt="" width={18} />
                                            </div>
                                            <div style={{ width: "100%" }}>
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
                                                        <button type='button' onClick={handleShare}> Share </button>
                                                        {User?.result?._id === question?.userId && (
                                                            <button type="button" onClick={handleDelete}>
                                                                Delete
                                                            </button>
                                                        )}

                                                    </div>

                                                    <div>
                                                        {/* // Moment Library to tell date from Now */}
                                                        <p> asked  {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/User/${question._id}`} className='user-link' style={{ color: '#0086d8' }}>
                                                            <Avatar backgroundColor='orange' px='8px' py='12px' > {question.userPosted.charAt(0).toUpperCase()}</Avatar>
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
                                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                            </section>
                                        )
                                    }

                                    <section className='post-ans-container'>
                                        <h3> Your Answers </h3>
                                        <form onSubmit={(e) => handlePostAns(e, question.answer.length)}>
                                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                                            <input type="submit" className='post-ans-btn' value='Post your Answer' />
                                        </form>
                                        <p>
                                            Browse other Question Tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                                ))
                                            } or
                                            <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> Ask Your Own Question . </Link>
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
