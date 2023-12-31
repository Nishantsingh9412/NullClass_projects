import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'


const Widget = () => {
  return (
    <div className='widget'>
      <h4> The overflow blog </h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width= '18px' />
          <p>Observability is key to the future of sowtware (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width= '18px' />
          <p>Observability is key to the future of sowtware (and your DevOps career)</p>
        </div>
      </div>

      <h4> Feature on Meta  </h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width= '18px' />
          <p>Review queue workflows - Final release...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width= '18px' />
          <p> Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG </p>
        </div>

        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt="comment" width= '18px' />
          <p> Outdated Answers: accepted answer is now unpinned on Stack Overflow </p>
        </div>  
      </div>


      <h4> Hot Meta Posts </h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <p>38</p>
          <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p> What is the best course of action when a user has high enough rep to... </p>
        </div>

        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>  Is a link to the "How to ask" help page a useful comment? </p>
        </div>
      </div>

    </div> 
  )
}

export default Widget
