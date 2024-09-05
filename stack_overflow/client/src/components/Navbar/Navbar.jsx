import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import './Navbar.css'


import { BsSearch } from 'react-icons/bs'
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';


const Navbar = () => {
    const dispatch = useDispatch();
    var User = useSelector((state) => (state.currentUserReducer));      // Selects profile data from Store 

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        dispatch(setCurrentUser(null))
    }

    // Just Creates a side Effect 
    useEffect(() => {

        const token = User?.token
        if (token) {
            const decodedToken = decode(token);
            // Here 1000 means 1 hour 
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }

        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch]);


    return (
        // <div >
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-item nav-btn' >
                    <img src={logo} alt='logo' />
                </Link>

                <Link to='/' className='nav-item nav-btn' > About </Link>
                <Link to='/' className='nav-item nav-btn' > Products </Link>
                <Link to='/' className='nav-item nav-btn' > For Teams </Link>

                <form >

                    <input type="text" placeholder='search' />
                    <BsSearch color='black' className='search-icon' />
                </form>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'> Log in  </Link> :
                    <>
                        <Avatar backgroundColor={'#009dff'} px={'10px'} py={'14px'} borderRadius={'50%'} color={'white'}>
                            <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                                {
                                    User?.result?.name?.charAt(0)?.toUpperCase()
                                }
                            </Link>
                        </Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}  > Log Out  </button>
                    </>
                }

            </div>
        </nav>
        // </div>
    )
}

export default Navbar
