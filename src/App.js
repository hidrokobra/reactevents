import React from 'react';
import Navbar from './components/Navbar';
import './components/CSS/formularios.css';
import './components/CSS/index.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEvent from './components/pages/CreateEvent';
import ActiveEvents from './components/pages/ActiveEvents';
import FreeDays from './components/pages/FreeDays';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/components/pages/CreateEvent' component={CreateEvent} />
        <Route path='/products' component={ActiveEvents} />
        <Route path='/contact-us' component={FreeDays} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Profile} />
    </Routes>
    </Router>
);
}

export default App;