import React from 'react'
import {Routes,Route} from 'react-router-dom';


import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions   from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestions/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';


const AllRoutes = () => {
  return (
                    // we Can write routes as children 
    <Routes>            
        <Route exact path='/' Component={Home}> </Route>
        <Route exact path='/Auth' Component={Auth }> </Route>
        <Route exact path='/Questions' Component={Questions}></Route>
        <Route exact path='/AskQuestion' Component={AskQuestion}></Route>
        <Route exact path='/Questions/:id' Component={DisplayQuestion}></Route>
        <Route  path='/Tags' element={< Tags/>}> </Route>
        <Route path='/Users' element={<Users />} > </Route>
        <Route path='/Users/:id' element={<UserProfile />} > </Route>
    </Routes>
  )
}

export default AllRoutes
