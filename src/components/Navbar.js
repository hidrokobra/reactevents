import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownEvents from './dropdowns/DropdownEvents';
import Dropdown from './dropdowns/DropdownList';
import DropdownOrganization from './dropdowns/DropdownOrganization';
import DropdownProfile from './dropdowns/DropdownProfile';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownEvents, setDropdownEvents] = useState(false);
  const [dropdownList, setDropdownList] = useState(false);
  const [dropdownOrganization, setDropdownOrganization] = useState(false);
  const [dropdownProfile, setDropdownProfile] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EVENTS
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item' onMouseEnter={onMouseEnterEvents} onMouseLeave={onMouseLeaveEvents}>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events <i className='fas fa-caret-down' />
            </Link>
            {dropdownEvents && <DropdownEvents />}
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList}>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              List <i className='fas fa-caret-down' />
            </Link>
            {dropdownList && <Dropdown />}
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnterOrganization} onMouseLeave={onMouseLeaveOrganization}>
          <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Organization <i className='fas fa-caret-down' />
            </Link>
            {dropdownOrganization && <DropdownOrganization />}
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnterProfile} onMouseLeave={onMouseLeaveProfile}>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Profile <i className='fas fa-caret-down' />
            </Link>
            {dropdownProfile && <DropdownProfile />}
          </li>

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
