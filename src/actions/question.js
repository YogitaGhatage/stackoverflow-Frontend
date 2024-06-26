import React from 'react'
import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (disptach) => {
 try{
      const { data } = await api.postQuestion(questionData)
      disptach({ type:"POST_QUESTION",payload: data })
      disptach(fetchAllQuestions())
      navigate('/')
 } catch (error) {
       console.log(error)
   }
 }

export const fetchAllQuestions = () => async (disptach) => {
     try{
          const { data } = await api.getAllQuestions();
          disptach({ type: 'FETCH_ALL_QUESTIONS', payload: data })
     } catch (error) {
        console.log(error);
     }
}

export const deleteQuestion = (id, navigate) => async (disptach) => {
     try {
          const { data } = api.deleteQuestion(id)
          disptach(fetchAllQuestions())
          navigate("/")
     } catch (error) {
          console.log(error)
     }
}

export const voteQuestion = (id, value, userId) => async (disptach) => {
     try {
          const { data } = await api.voteQuestion(id, value, userId)
          disptach(fetchAllQuestions())
     } catch (error) {
          console.log(error)
     }
}


export const postAnswer = (answerData) => async (dispatch) => {
     try {
       const { id, noOfAnswers, answerBody, userAnswered } = answerData;
       const { data } = await api.postAnswer(
         id,
         noOfAnswers,
         answerBody,
         userAnswered
       );
       dispatch({ type: "POST_ANSWER", payload: data });
       dispatch(fetchAllQuestions());
     } catch (error) {
       console.log(error);
     }
   };
   
   export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
     try {
       await api.deleteAnswer(id, answerId, noOfAnswers);
       dispatch(fetchAllQuestions());
     } catch (error) {
       console.log(error);
     }
   };

  

  

