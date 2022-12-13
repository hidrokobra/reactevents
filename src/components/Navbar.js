import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import DropdownEvents from './dropdowns/DropdownEvents';
import Dropdown from './dropdowns/DropdownList';
import DropdownOrganization from './dropdowns/DropdownOrganization';
import DropdownProfile from './dropdowns/DropdownProfile';

function Navbar() {
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
            <Link to='/CreateEvent' className='nav-links' onClick={closeMobileMenu}>
              Events <i className='fas fa-caret-down' />
            </Link>
            {dropdownEvents && <DropdownEvents />}
          </li>

          {/* dropdown List */}
          <li className='nav-item' onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList}>
            <Link to='/ActiveEvents' className='nav-links' onClick={closeMobileMenu}>
              List <i className='fas fa-caret-down' />
            </Link>
            {dropdownList && <Dropdown />}
          </li>

          {/* dropdown Organization */}
          <li className='nav-item' onMouseEnter={onMouseEnterOrganization} onMouseLeave={onMouseLeaveOrganization}>
            <Link to='/FreeDays' className='nav-links' onClick={closeMobileMenu}>
              Organization <i className='fas fa-caret-down' />
            </Link>
            {dropdownOrganization && <DropdownOrganization />}
          </li>

          {/* dropdown Profile */}
          <li className='nav-item' onMouseEnter={onMouseEnterProfile} onMouseLeave={onMouseLeaveProfile}>
            <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
              Profile <i className='fas fa-caret-down' />
            </Link>
            {dropdownProfile && <DropdownProfile />}
          </li>

          {/* Log-out button */}
          <li>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Log out
            </Link>
          </li>
        </ul>
        <Button />     
      </nav>
    </>
  );
}

export default Navbar;
