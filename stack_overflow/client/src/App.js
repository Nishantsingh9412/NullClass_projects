import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div className='App'>
      <Router >
          <Navbar /> 
      </Router>
    </div>
  )
}

export default App
