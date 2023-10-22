import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());  
    dispatch(fetchAllUsers());
  },[dispatch])

  return (
    <div className='App'>
      <Router >
          <Navbar /> 
          <AllRoutes />
      </Router>
    </div>
  )
}

export default App
