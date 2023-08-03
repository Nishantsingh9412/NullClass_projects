import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import Avatar from '../../components/Avatar/Avatar'  
import Button from '../../components/Button/Button'  
import {BsSearch} from 'react-icons/bs'
import './Navbar.css'
 
const Navbar = () => {
    var User = null;
  return (
    // <div >
        <nav>
            <div className="navbar">
                <Link to='/' className='nav-item nav-btn' > 
                    <img src={logo} alt='logo' />
                </Link>
                
                <Link to='/' className='nav-item nav-btn' > About </Link>
                <Link to='/' className='nav-item nav-btn' > Products </Link>
                <Link to='/' className='nav-item nav-btn' > For Teams </Link>

                <form >

                    <input type="text" placeholder='search' />
                    <BsSearch color='black' className='search-icon'/>
                </form>
                { User === null ?
                    <Link to='/Auth' className='nav-item nav-links'> Log in  </Link> : 
                    <>
                        <Link to='/' className=''> <Avatar> N </Avatar>  </Link>
                        <Button > Log Out  </Button>
                    </>
                }

            </div>
        </nav>
    // </div>
  )
}

export default Navbar
