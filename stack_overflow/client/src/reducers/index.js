import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions.js'


export default combineReducers({
  authReducer , currentUserReducer,questionsReducer
})


// import React from 'react'

// const index = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default index