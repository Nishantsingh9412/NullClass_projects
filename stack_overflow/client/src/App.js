import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());  
  },[])

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
