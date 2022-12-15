import React from 'react';
import Navbar from './components/Navbar';
import './components/CSS/formularios.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActiveEvents from './components/pages/ActiveEvents';
import AllEvents from './components/pages/AllEvents';
import Clearallevents from './components/pages/ClearAllEvents';
import Createevent from './components/pages/CreateEvent';
import DeleteEvent from './components/pages/DeleteEvent';
import ExpiredEvents from './components/pages/ExpiredEvents';
import FinishedEvents from './components/pages/FinishedEvents';
import FreeDays from './components/pages/FreeDays';
import MeetingPlaces from './components/pages/MeetingPlaces';
import PostponedEvents from './components/pages/PostponedEvents';
import Profile from './components/pages/Profile';
import Selectlanguage from './components/pages/Selectlanguage';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/createevent' element={<Createevent/>} />
        <Route path='/clearallevents' element={<Clearallevents/>} />
        <Route path='/activeevents' element={<ActiveEvents/>} />
        <Route path='/freedays' element={<FreeDays/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/selectlanguage' element={<Selectlanguage/>} />
        <Route path='/allevents' element={<AllEvents/>} />
        <Route path='/deleteevent' element={<DeleteEvent/>} />
        <Route path='/expiredevents' element={<ExpiredEvents/>} />
        <Route path='/finishedevents' element={<FinishedEvents/>} />
        <Route path='/meetingplaces' element={<MeetingPlaces/>} />
        <Route path='/postponedevents' element={<PostponedEvents/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </Router>
);
}

export default App;