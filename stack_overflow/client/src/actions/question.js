import React from 'react'
import * as api from '../api'
import { useFetcher } from 'react-router-dom'

export const askQuestion = (questionData,navigate) => async (dispatch) => {
  try{
    const {data} = await api.postQuestion(questionData)
    dispatch({type : "POST_QUESTION",payload:data})
    dispatch(fetchAllQuestions());
    navigate('/');
  }catch(error){
    console.log(error);
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try{
    const {data} = await api.getAllQuestions();
    dispatch({type : 'FETCH_ALL_QUESTIONS',payload:data })
  }catch(error){
    console.log(error);
  }
}


    // async (dispatch) this is the syntax for redux thunk 
    export const deleteQuestion = (id,navigate) => async(dispatch) => {
      try {
        const {data} = api.deleteQuestion(id);
        dispatch(fetchAllQuestions());
        navigate('/');
      } catch (error) {
        console.log(error);
      }
  }

  

export const postAnswer = (answerData) => async (dispatch) => {
  try { 
     // same as answerData.id 
    const {id,noOfAnswers,answerBody,userAnswered,userId} = answerData
    // 1. This API call function will return only one result
    // 2. Now from that result you are extracting only data property         
    const {data} = await api.postAnswer(id,noOfAnswers,answerBody,userAnswered,userId);
    dispatch({type:'POST_ANSWER' , payload:data});
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error)
  }
}


export const deleteAnswer = (id , answerId , noOfAnswers) => async (dispatch) => {
  try {
    const {data} = await api.deleteAnswer(id , answerId , noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
}

export default askQuestion
