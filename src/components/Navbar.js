import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {auth} from '../components/firebase/firebase';
import './CSS/Navbar.css';
import './CSS/Button.css';
import DropdownEvents from './dropdowns/DropdownEvents';
import Dropdown from './dropdowns/DropdownList';
import DropdownOrganization from './dropdowns/DropdownOrganization';
import DropdownProfile from './dropdowns/DropdownProfile';

function Navbar() {

  /* login with Google */
  const [currentUser, setCurrentUser] = useState(null);
  /*
  State
  0: Initialized
  1: Loading
  2: Login
  3: Login (Without register)
  4: No login state
  */
  const [state, setCurrentState] = useState(0);

  const [click, setClick] = useState(false);
  // Switch for each dropdown, indicate if it's active or not
  const [dropdownEvents, setDropdownEvents] = useState(false);
  const [dropdownList, setDropdownList] = useState(false);
  const [dropdownOrganization, setDropdownOrganization] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //dropdown for "Events"
  const onMouseEnterEvents = () => {
    if (window.innerWidth < 960) {
      setDropdownEvents(false);
    } else {
      setDropdownEvents(true);
    }
  };

  const onMouseLeaveEvents = () => {
    if (window.innerWidth < 960) {
      setDropdownEvents(false);
    } else {
      setDropdownEvents(false);
    }
  };

  //dropdown for "List"
  const onMouseEnterList = () => {
    if (window.innerWidth < 960) {
      setDropdownList(false);
    } else {
      setDropdownList(true);
    }
  };

  const onMouseLeaveList = () => {
    if (window.innerWidth < 960) {
      setDropdownList(false);
    } else {
      setDropdownList(false);
    }
  };

  //dropdown for "Organization"
  const onMouseEnterOrganization = () => {
    if (window.innerWidth < 960) {
      setDropdownOrganization(false);
    } else {
      setDropdownOrganization(true);
    }
  };

  const onMouseLeaveOrganization = () => {
    if (window.innerWidth < 960) {
      setDropdownOrganization(false);
    } else {
      setDropdownOrganization(false);
    }
  };

  //dropdown for "Profile"
  const onMouseEnterProfile = () => {
    if (window.innerWidth < 960) {
      setDropdownProfile(false);
    } else {
      setDropdownProfile(true);
    }
  };

  const onMouseLeaveProfile = () => {
    if (window.innerWidth < 960) {
      setDropdownProfile(false);
    } else {
      setDropdownProfile(false);
    }
  };

  useEffect(() => {
    setCurrentState(1);
    onAuthStateChanged(auth, handleUserStateChanged)
  },[]);

  function handleUserStateChanged(user){
    if(user){
      setCurrentState(3);
      console.log(user.displayName);
    }else{
      setCurrentState(4);
      console.log('No hay nadie autenticado');
    }
  }
  async function handleOnClick(){

    const googleProvider = new GoogleAuthProvider();
    await singInWithGoogle(googleProvider);

    async function singInWithGoogle(){
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  if (state === 3){
    return (
      <>
        {/* Navbar */}
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EVENTS
            <i class='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
  
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  
            {/* dropdown Events */} 
            <li className='nav-item' onMouseEnter={onMouseEnterEvents} onMouseLeave={onMouseLeaveEvents}>
              <Link to='/createevent' className='nav-links' onClick={closeMobileMenu}>
                Events <i className='fas fa-caret-down' />
              </Link>
              {dropdownEvents && <DropdownEvents />}
            </li>
  
            {/* dropdown List */}
            <li className='nav-item' onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList}>
              <Link to='/activeevents' className='nav-links' onClick={closeMobileMenu}>
                List <i className='fas fa-caret-down' />
              </Link>
              {dropdownList && <Dropdown />}
            </li>
  
            {/* dropdown Organization */}
            <li className='nav-item' onMouseEnter={onMouseEnterOrganization} onMouseLeave={onMouseLeaveOrganization}>
              <Link to='/freedays' className='nav-links' onClick={closeMobileMenu}>
                Organization <i className='fas fa-caret-down' />
              </Link>
              {dropdownOrganization && <DropdownOrganization />}
            </li>
  
            {/* dropdown Profile */}
            <li className='nav-item' onMouseEnter={onMouseEnterProfile} onMouseLeave={onMouseLeaveProfile}>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                Profile <i className='fas fa-caret-down' />
              </Link>
              {dropdownProfile && <DropdownProfile />}
            </li>
  
            {/* Login and Logout button */}
          </ul>
          <div><button className='btn' onClick={handleOnClick}>Logout</button></div>    
        </nav>
      </>
    );
  }

  if (state === 4){
    return (
    <>
      {/* Navbar */}
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EVENTS
        <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
        <div><button className='btn' onClick={handleOnClick}>Login</button></div>
      </nav>
    </>
    );
  }

}

export default Navbar;
